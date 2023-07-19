import { Controller, Get, Req, Res } from "@nestjs/common";
import { StudentsService } from "./students.service";
import { Http2ServerResponse } from "http2";


@Controller('students')
export class StudentsController{
    constructor(private studentsService: StudentsService){};
    
    @Get('getallstudents')
    getstudents():Promise<any>{
        return this.studentsService.getstudents();
    }

    @Get('getalldues')
    getDues():Promise<any>{
        return this.studentsService.getDues();
    }

    @Get('getInstallments')
    getInstallments():Promise<any>{
        return this.studentsService.getInstallments();
    }

    @Get('getFeehead')
    getFeehead():Promise<any>{
        return this.studentsService.getFeehead();
    }

    @Get('getInvoice')
    getInvoice():Promise<any>{
        return this.studentsService.getInvoice();
    }

    @Get('getPayment')
    getPayment():Promise<any>{
        return this.studentsService.getPayment();
    }

}

