export interface Course {
  id: number;
  title: string;
  description: string;
  intstructor: string;
  image?: string;
  category?: string;
  length: number;
  people: number;
  rating: number;
}

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}
