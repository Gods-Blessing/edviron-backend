import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import {MongooseModule} from "@nestjs/mongoose";
import { Student, studentSchema } from '../schemas/student.Schema';
import { Due, dueSchema } from 'src/schemas/due.Schema';
import { installmentSchema } from 'src/schemas/installment.Schema';
import { feehead, feeheadSchema } from 'src/schemas/feehead.Schema';
import { Invoice, invoiceSchema } from 'src/schemas/invoice.Schema';
import { Payment, paymentSchema } from 'src/schemas/payment.Schema';

@Module({
    imports:[MongooseModule.forFeature([{name: Due.name,schema: dueSchema },{name: 'Student',schema: studentSchema }, {name:'Installment', schema:installmentSchema}, {name:feehead.name, schema: feeheadSchema}, {name:Invoice.name, schema: invoiceSchema}, {name:Payment.name, schema: paymentSchema}, {name:Invoice.name, schema: invoiceSchema}])],
    controllers:[StudentsController],
    providers: [StudentsService],
})

export class StudentsModule {
}
