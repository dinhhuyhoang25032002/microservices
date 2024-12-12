import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from 'src/payments/payments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { COURSE_MODEL, CourseSchema } from 'src/schemas/course.schema';
import { HISTORY_MODEL, HistorySchema } from 'src/schemas/history.schema';
import { PAYMENT_MODEL, PaymentSchema } from 'src/schemas/payments.schema';
import { USER_MODEL, UserSchema } from 'src/schemas/users.schema';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [NatsClientModule,
    MongooseModule.forFeature([
      {
        name: USER_MODEL,
        schema: UserSchema,
      },
      {
        name: PAYMENT_MODEL,
        schema: PaymentSchema,
      },
      {
        name: COURSE_MODEL,
        schema: CourseSchema,
      },
      {
        name: HISTORY_MODEL,
        schema: HistorySchema,
      },
    ]),
  ], controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule { }
