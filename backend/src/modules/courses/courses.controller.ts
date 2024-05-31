import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.entity';
import { Student } from '../students/student.entity';

@Controller('courses')
export class CoursesController {
  constructor(private coursesServises: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return await this.coursesServises.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Course> {
    return await this.coursesServises.findOne(id);
  }

  @Post()
  async create(@Body() course: Course): Promise<Course> {
    return await this.coursesServises.create(course);
  }

  @Put(':id')
  async update(@Body() course: Course, @Param('id') id: number): Promise<void> {
    await this.coursesServises.update(course, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.coursesServises.delete(id);
  }

  @Post(':id/assign-teacher/:teacherId')
  async assingTeacher(
    @Param('id') id: number,
    @Param('teacherId') teacherId: number,
  ): Promise<Course> {
    return await this.coursesServises.assignTeacher(id, teacherId);
  }

  @Post(':id/assign-students/:studentId')
  async assingStudent(
    @Param('id') id: number,
    @Param('studentId') studentId: number,
  ): Promise<Course> {
    return await this.coursesServises.assingStudents(id, studentId);
  }

  @Get(':id/students')
  async getStudents(@Param('id') id: number): Promise<Student[]> {
    return await this.coursesServises.getStudents(id);
  }
}
