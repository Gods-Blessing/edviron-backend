// import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

// export type StudentDocument = HydratedDocument<Student>;

// @Schema()
// export class Student{

//     @Prop()
//     FeeHead: String

//     @Prop()
//     Due: Date

//     @Prop()
//     Installment: []

//     @Prop()
//     Payment: String | Number


// }

// export const StudentSchema = SchemaFactory.createForClass(Student);

import * as mongoose from 'mongoose'

export interface Student  {
        id: string,
        FeeHead: string,
        Due: [],
        Installment: [],
        Payment: string
}

export const studentSchema = new mongoose.Schema({
    FeeHead:{type:String},
}, {timestamps:true})



