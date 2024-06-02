import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    userName: string;
    accountNumber: string;
    emailAddress: string;
    identityNumber: string;
}

const UserSchema: Schema = new Schema({
    userName: { type: String, required: true },
    accountNumber: { type: String, required: true, index: true },
    emailAddress: { type: String, required: true },
    identityNumber: { type: String, required: true, index: true }
});

export default mongoose.model<IUser>('User', UserSchema);
