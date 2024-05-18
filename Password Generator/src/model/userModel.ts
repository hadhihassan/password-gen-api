import mongoose, { Schema } from 'mongoose'

interface IUser extends Document {
    name : string,
    email : string,
}

const userSchema : Schema<IUser> = new Schema({
    name : String,
    email : String,
})
const User = mongoose.model<IUser>("User", userSchema);
export default User;