import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./pages/HomePage";
import { CourseDetailPage } from "./pages/CourseDetail";
import { useCourse } from "./api/courseLoad";
import "./styles/index.css";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import type { Course } from "./types/courses";

// 1. Helper Component to find the specific course from the URL
const CourseDetailPageWrapper = ({ courses }: { courses: Course[] }) => {
  const { id } = useParams<{ id: string }>();

  // Compare as Strings to avoid the "number vs string" TypeScript error
  const course = courses.find((c) => String(c.id) === id);

  // Loading state if data isn't in yet
  if (courses.length === 0) {
    return (
      <div className="p-20 text-center text-gray-400">Loading courses...</div>
    );
  }

  // Error state if ID doesn't match anything
  if (!course) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
        <p className="text-gray-500 mt-2">
          We couldn't find the course you're looking for.
        </p>
      </div>
    );
  }

  return <CourseDetailPage course={course} />;
};

function App() {
  const { courses } = useCourse();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course/:id"
          element={<CourseDetailPageWrapper courses={courses} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
