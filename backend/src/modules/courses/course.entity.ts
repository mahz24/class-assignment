import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Student } from '../students/student.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.courses)
  teacher: Teacher;

  @ManyToMany(() => Student, (student) => student.courses)
  students: Student[];
}
