import mongoose, { Document, Schema } from 'mongoose';

export interface IWinner extends Document {
    name: string;
    prize: string;
    date: Date;
}

const winnerSchema: Schema = new Schema({
    name: { type: String, required: true },
    prize: { type: String, required: true },
    date: { type: Date, required: true }
});

export const Winner = mongoose.model<IWinner>('Winner', winnerSchema);