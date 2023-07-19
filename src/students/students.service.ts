import { HttpStatus, Injectable, Res } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import { Model, PopulateOption } from "mongoose";
import { Student } from "src/schemas/student.Schema";
import { Due } from "src/schemas/due.Schema";
import { Installment } from "src/schemas/installment.Schema";
import { feehead } from "src/schemas/feehead.Schema";
import { Invoice } from "src/schemas/invoice.Schema";
import { Payment } from "src/schemas/payment.Schema";

@Injectable()
export class StudentsService{

    constructor(@InjectModel('Student') public readonly studentschema: Model<Student>,
    @InjectModel('Due') public readonly productschema:Model<Due>,
    @InjectModel('Installment') public readonly installmentschema:Model<Installment>,
    @InjectModel('feehead') public readonly feeheadSchema:Model<feehead>,
    @InjectModel('Invoice') public readonly invoiceSchema:Model<Invoice>,
    @InjectModel('Payment') public readonly paymentSchema:Model<Payment>
    ){}

    async getstudents():Promise<any>{
        console.log("heyyyyyyyy");
        const students = await this.studentschema.find({});
        // await students.populate('fee_head');
        console.log(students);

        return students;
    };

    async getDues():Promise<any>{
        console.log("Duesss");
        const students = await this.productschema.find({}).populate("student");
        // await students;
        console.log(students);

        return students;
    };

    async getInstallments():Promise<any>{
        // console.log("Duesss");
        const students = await this.installmentschema.find({});
        // await students.populate('fee_head');
        console.log(students);

        return students;
    };

    async getFeehead():Promise<any>{
        // console.log("Duesss");
        const feehead = await this.feeheadSchema.find({});
        // await students.populate('fee_head');
        console.log(feehead);

        return feehead;
    };

    async getInvoice():Promise<any>{
        // console.log("Duesss");
        const students = await this.invoiceSchema.find({});
        // await students.populate('fee_head');
        console.log(students);

        return students;
    };

    async getPayment():Promise<any>{
        // console.log("Duesss");
        const students = await this.paymentSchema.find({});
        // await students.populate('fee_head');
        console.log(students);

        return students;
    };

}
