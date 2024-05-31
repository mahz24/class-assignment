import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { Teacher } from '../teachers/teacher.entity';
import { Student } from '../students/student.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.coursesRepository.find({
      relations: ['teacher', 'students'],
    });
  }

  async findOne(id: number): Promise<Course> {
    const course: Course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['teacher', 'students'],
    });

    if (!course) {
      throw new BadRequestException('Course not foud');
    }

    return course;
  }

  async create(course: Course): Promise<Course> {
    return await this.coursesRepository.save(course);
  }

  async update(course: Course, id: number): Promise<Course> {
    const current: Course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['teacher', 'students'],
    });

    if (!current) {
      throw new BadRequestException('Course not foud');
    }

    return await this.coursesRepository.save(course);
  }

  async delete(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }

  async assignTeacher(id: number, teacherId: number): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: { id },
    });
    const teacher = await this.teacherRepository.findOne({
      where: { id: teacherId },
    });

    if (!course) {
      throw new BadRequestException('Course not foud');
    }

    if (!teacher) {
      throw new BadRequestException('Teacher not foud');
    }

    course.teacher = teacher;
    return await this.coursesRepository.save(course);
  }

  async assingStudents(id: number, studentId: number): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['teacher', 'students'],
    });
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
    });

    if (!course) {
      throw new BadRequestException('Course not foud');
    }

    if (!student) {
      throw new BadRequestException('Student not foud');
    }

    // Verifica si el estudiante ya está en el curso
    if (course.students.includes(student)) {
      throw new BadRequestException('Student already enrolled in this course');
    }

    // Inicializa students si es undefined
    if (!course.students) {
      course.students = [];
    }

    course.students.push(student);
    return await this.coursesRepository.save(course);
  }

  async getStudents(id: number): Promise<Student[]> {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['students'],
    });

    if (!course) {
      throw new BadRequestException('Course not foud');
    }

    return course.students;
  }
}
