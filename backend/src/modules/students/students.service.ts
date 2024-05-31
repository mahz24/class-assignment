import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find({ relations: ['courses'] });
  }

  async findOne(id: number): Promise<Student> {
    const student: Student = await this.studentRepository.findOne({
      where: { id },
      relations: ['courses'],
    });

    if (!student) {
      throw new BadRequestException('Student not found');
    }

    return student;
  }

  async create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async update(student: Student, id: number): Promise<Student> {
    const current: Student = await this.studentRepository.findOne({
      where: { id },
    });

    if (!current) {
      throw new BadRequestException('Student not found');
    }

    return await this.studentRepository.save(student);
  }

  async delete(id: number): Promise<string> {
    const student: Student = await this.studentRepository.findOne({
      where: { id },
    });

    if (!student) {
      throw new BadRequestException('Student not found');
    }

    await this.studentRepository.delete(student);

    return 'Student deleted succesfully';
  }
}
