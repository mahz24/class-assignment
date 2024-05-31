import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Course } from './course.entity';
import { Student } from '../students/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teacher, Course, Student])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
