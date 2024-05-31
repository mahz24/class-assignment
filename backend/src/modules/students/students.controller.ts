import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Post()
  async create(@Body() student: Student): Promise<Student> {
    return this.studentsService.create(student);
  }

  @Put(':id')
  async update(
    @Body() teacher: Student,
    @Param('id') id: number,
  ): Promise<void> {
    await this.studentsService.update(teacher, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.studentsService.delete(id);
  }
}
