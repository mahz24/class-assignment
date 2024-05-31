import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async findAll(): Promise<Teacher[]> {
    return await this.teacherRepository.find({ relations: ['courses'] });
  }

  async findOne(id: number): Promise<Teacher> {
    const teacher: Teacher = await this.teacherRepository.findOne({
      where: { id },
      relations: ['courses'],
    });

    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }

    return teacher;
  }

  async create(teacher: Teacher): Promise<Teacher> {
    return await this.teacherRepository.save(teacher);
  }

  async update(teacher: Teacher, id: number): Promise<Teacher> {
    const current: Teacher = await this.teacherRepository.findOne({
      where: { id },
    });

    if (!current) {
      throw new BadRequestException('Teacher not found');
    }

    return await this.teacherRepository.save(teacher);
  }

  async delete(id: number): Promise<string> {
    const teacher: Teacher = await this.teacherRepository.findOne({
      where: { id },
    });

    if (!teacher) {
      throw new BadRequestException('Teacher not found');
    }

    await this.teacherRepository.delete(id);

    return 'Teacher deleted successfully';
  }
}
