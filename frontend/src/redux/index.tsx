import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Course } from "../interfaces/course.interface";
import { Student } from "../interfaces/student.interface";
import { Teacher } from "../interfaces/teacher.interface";

interface DataState {
  courses: Course[];
  statusCourses: 'idle' | 'loading' | 'succeeded' | 'failed';
  students: Student[];
  statusStudents: 'idle' | 'loading' | 'succeeded' | 'failed';
  teachers: Teacher[];
  statusTeacher: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const getCourses = createAsyncThunk('courses',async () => {
  const resp = axios.get('http://localhost:3000/courses');
  return (await resp).data
})

export const getStudents = createAsyncThunk('students',async () => {
  const resp = axios.get('http://localhost:3000/students');
  return (await resp).data
})

export const getTeachers = createAsyncThunk('teachers',async () => {
  const resp = axios.get('http://localhost:3000/teachers');
  return (await resp).data
})

const initialState: DataState = {
  courses: [],
  statusCourses: 'idle',
  students: [],
  statusStudents: 'idle',
  teachers: [],
  statusTeacher: 'idle',
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.statusCourses = 'loading';
      })
      .addCase(getCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.statusCourses = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(getStudents.pending, (state) => {
        state.statusStudents = 'loading';
      })
      .addCase(getStudents.fulfilled, (state, action: PayloadAction<Student[]>) => {
        state.statusStudents = 'succeeded';
        state.students = action.payload;
      })
      .addCase(getTeachers.pending, (state) => {
        state.statusTeacher = 'loading';
      })
      .addCase(getTeachers.fulfilled, (state, action: PayloadAction<Teacher[]>) => {
        state.statusTeacher = 'succeeded';
        state.teachers = action.payload;
      })
      
  }
})

export default dataSlice.reducer;