import * as mongoose from 'mongoose'

export interface Installment  {
        Installment: any[],
}

export const installmentSchema = new mongoose.Schema({
    Installment:Date,
    dues: [{type:mongoose.Schema.Types.ObjectId, ref:'Due'}]

}, {timestamps:true})