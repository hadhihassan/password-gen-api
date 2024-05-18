import mongoose from "mongoose";


export const mongoConnect = async () => {
    try {
        const MONGO_URI = "mongodb://127.0.0.1:27017/gen-pass";
        if (MONGO_URI) {
            await mongoose.connect(MONGO_URI);
            console.log(`MongoDB connected: ${mongoose.connection.host}`);
        }
    } catch (error) {
        const err: Error = error as Error;
        console.log(`Error is ${err.message}`);
        process.exit(1);
    }
}