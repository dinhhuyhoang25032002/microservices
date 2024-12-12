import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { COURSE_MODEL, CourseSchema } from 'src/schemas/course.schema';
import { LESSON_MODEL, LessonSchema } from 'src/schemas/lesson.schema';
import { USER_MODEL, UserSchema } from 'src/schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: COURSE_MODEL,
        schema: CourseSchema

      },
      {
        name: LESSON_MODEL,
        schema: LessonSchema
      },
      {
        name: USER_MODEL,
        schema: UserSchema
      }
    ])
  ],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule { }
