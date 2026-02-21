export interface Course {
  id: number;
  title: string;
  discription: string;
  intstructor: string;
  imgage?: string;
  catagory?: string;
}

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}
