import { Controller, } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class MailerController {
    constructor(
        private readonly mailerService: MailerService
    ) { }
    @EventPattern('sendEmail')
    SendEmail(@Payload() payload: { email: string }) {
        return this.mailerService.handleSendEmail(payload)
    }
    @EventPattern('sendNotification')
    SendNotification(@Payload() payload :{ email: string, value: string, nodeId: string, type:string }){
        return this.mailerService.handleSendNotification(payload)
    }
}
