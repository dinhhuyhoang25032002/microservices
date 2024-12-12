import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
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

          // connection.plugin(MongooseDelete,
          //   {
          //     deletedBy: true, deletedByType: String, deletedAt: true,
          //     overrideMethods: 'all'
          //   });
          return connection;
        }
      }
    ),
    MailerModule, NatsClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
