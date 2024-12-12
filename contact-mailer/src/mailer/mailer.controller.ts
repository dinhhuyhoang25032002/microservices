import { Controller, Inject } from '@nestjs/common';
import { MailerService } from 'src/mailer/mailer.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class MailerController {
    constructor(
        private readonly mailerService: MailerService
    ) { }
    @EventPattern('sendEmail')
    handleSendEmail(@Payload() payload: { email: string }) {
        return this.mailerService.handleSendEmail(payload)
    }
}