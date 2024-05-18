import mongoose, { Schema, Document } from 'mongoose';

interface IPassword extends Document {
    generatedPassword: string;
    createdAt: Date;
    strong: boolean
}

const passwordSchema: Schema<IPassword> = new Schema({
    generatedPassword: {
        type: String,
        required: true
    },
    strong: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Password = mongoose.model<IPassword>('Password', passwordSchema);

export default Password;
