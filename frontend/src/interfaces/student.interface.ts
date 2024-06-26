export interface Student {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface StudentCardProps {
  student: Student;
}