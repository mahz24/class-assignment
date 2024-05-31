import { Student } from "./student.interface";
import { Teacher } from "./teacher.interface";

export interface Course {
  id: number;
  name: string;
  description: string;
  teacher: Teacher;
  students: Student[];
}

export interface CourseCardProps {
  course: Course;
}