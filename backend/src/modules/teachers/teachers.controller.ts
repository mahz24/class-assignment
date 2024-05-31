import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeacherService } from './teachers.service';
import { Teacher } from './teacher.entity';

@Controller('teachers')
export class TeachersController {
  constructor(private teacherService: TeacherService) {}

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }

  @Post()
  async create(@Body() teacher: Teacher): Promise<Teacher> {
    return this.teacherService.create(teacher);
  }

  @Put(':id')
  async update(
    @Body() teacher: Teacher,
    @Param('id') id: number,
  ): Promise<void> {
    await this.teacherService.update(teacher, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.teacherService.delete(id);
  }
}
