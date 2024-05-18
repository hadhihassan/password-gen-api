import { Express } from 'express';
import cors from 'cors';

export const setupCors = (app: Express): void => {
    const corsOptions: cors.CorsOptions = {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    };

    app.use(cors(corsOptions));
};
