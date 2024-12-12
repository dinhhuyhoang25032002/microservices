import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CoursesService } from 'src/courses/courses.service';

@Controller()
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }

    @MessagePattern('getInforCourse')
    handleGetInforCourse(@Payload() payload: {
        slug: string, query: boolean
    }) {
        console.log(payload);
        
        return this.courseService.findOneCourse(payload)
    }

    @MessagePattern('getAllCourseActive')
    handleGetInforCoursesActive(@Payload() body: { userId: string; courseId?: Array<string> }) {
        return this.courseService.getAllCourseActive(body)
    }
}
