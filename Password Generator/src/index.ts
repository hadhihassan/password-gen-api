import express, { Request, Response } from 'express';
import { mongoConnect } from './config/db';
import { setupCors } from './config/cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client();



const app = express();
const port = 4000;
setupCors(app)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


export interface PasswordProperty {
    length: number,
    symbol: boolean
    number: boolean
    lowerCase: boolean
    upperCase: boolean
    [key: string]: boolean | number;
}
app.post('/user/create-password/', (req: Request, res: Response) => {
    const generatePassword = ({
        length,
        upperCase,
        lowerCase,
        symbol,
        number
    }: PasswordProperty): string => {
        let characters = '';
        let password = '';

        if (upperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (symbol) characters += '!@#$%^&*()-_+=[]{}|;:,.<>?';
        if (number) characters += '0123456789';

        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return password;
    };
    res.status(200).json(generatePassword(req.body))
});
app.post("/google-auth", async (req, res) => {
    const { credential, client_id } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: client_id,
        });
        const payload = ticket.getPayload();
        const userid = payload["sub"];
        res.status(200).json({ payload });
    } catch (err) {
        res.status(400).json({ err });
    }
});
// API for Google Authentication
// app.post("/google-auth", async (req, res) => {
    // Check if the user exists in your database
    //     let user = await User.findOne({ email });
    // if (!user) {
    // Create a user if they do not exist
//     user = await User.create({
//         email,
//         name: `${given_name} ${family_name}`,
//         authSource: ‘google’,
//     });
// }

// Generate a JWT token
// const token = jwt.sign({ user }, JWT_SECRET);
// res.status(200).cookie(‘token’, token, { http: true }).json({ payload });
//     });


app.listen(port, async () => {
    await mongoConnect()
    console.log(`Server is running on http://localhost:${port}`);
});