import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import * as MongooseDelete from 'mongoose-delete'

@Module({
  imports: [PaymentsModule,
    ConfigModule.forRoot(
      {
        isGlobal: true,
        expandVariables: true,
        envFilePath: '.env'
      }
    ),
    MongooseModule.forRoot(process.env.URL_DATABASE,
      {
        connectionFactory(connection: Connection, name: string) {
          {
            connection && console.log("Connect Database successfully");
          }

          connection.plugin(MongooseDelete,
            {
              deletedBy: true, deletedByType: String, deletedAt: true,
              overrideMethods: 'all'
            });
          return connection;
        }
      }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
