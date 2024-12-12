import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose'
import { CoursesModule } from './courses/courses.module';
import * as MongooseDelete from 'mongoose-delete'
@Module({
  imports: [ConfigModule.forRoot(
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
  CoursesModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
