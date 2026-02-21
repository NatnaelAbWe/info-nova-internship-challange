export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  thumbnail?: string;
  category?: string;
  duration: string;
  enrolled: number;
  rating: number;
  level: string;
}

export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export interface SearchBarProps {
  searchItem: string;
  setSearchItem: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedLevel: string;
  setSelectedLevel: (val: string) => void;
}
