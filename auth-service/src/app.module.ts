import { Global, Module } from '@nestjs/common';
import { AuthsModule } from './auth/auths.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete'
@Global()
@Module({
  imports: [AuthsModule,
    ConfigModule.forRoot(
      {
        isGlobal: true,
        expandVariables: true,
        envFilePath: '.env.development.local'
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
