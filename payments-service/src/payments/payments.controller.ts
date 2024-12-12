import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentsService } from 'src/payments/payments.service';
import { RequestConfirm } from 'src/types/CustomType';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentService: PaymentsService) { }
    @EventPattern('handleConfirmPayment')
    handleConfirmPayment(@Payload() info: RequestConfirm) {
        return this.paymentService.handleConfirmPayment(info)
    }

    @MessagePattern('handleGetLinkForPayment')
    async handleGetLinkForPayment(
        @Payload() query: { userId: string; courseId: string, type: string },
    ) {
        return this.paymentService.handleGetLinkForPayment(query);
    }
}
