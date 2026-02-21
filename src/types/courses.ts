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

export interface SearchBarProps {
  searchItem: string;
  setSearchItem: (value: string) => void;
  filteredCourses: number;
  totalCount?: number;
}
