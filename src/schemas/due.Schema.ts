// import * as mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Student } from "./student.Schema";

// export interface Due  {
//         Due: any[],
// }

// export const dueSchema = new mongoose.Schema({
//     fee_head:[{type:mongoose.Schema.Types.ObjectId, ref:'FeeHead'}],
//     start_date:Date
// }, {timestamps:true})
export type StudentDocument = HydratedDocument<Due>;

@Schema()
export class Due{
    @Prop([{type:mongoose.Schema.Types.ObjectId, ref:'fee_head'}])
    fee_head:any

    @Prop([{type:mongoose.Schema.Types.ObjectId, ref:'Student'}])
    student:Student
}

export const dueSchema = SchemaFactory.createForClass(Due);

export class Duee{
    constructor(
        fee_head:any[],
        student: any[]
    ){}
}