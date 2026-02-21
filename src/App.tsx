import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import { CourseDetailPage } from "./pages/CourseDetail";
import { useCourse } from "./api/courseLoad";
import "./styles/index.css";

function App() {
  const { courses } = useCourse();

  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Dynamic Course Page: The :id allows us to grab specific data */}
        <Route
          path="/course/:id"
          element={<CourseDetailPageWrapper courses={courses} />}
        />
      </Routes>
    </Router>
  );
}

// A simple wrapper to find the specific course based on the URL ID
import { useParams } from "react-router-dom";

const CourseDetailPageWrapper = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id || c.id === Number(id));

  if (!course) return <div className="p-20 text-center">Course not found</div>;

  return <CourseDetailPage course={course} />;
};

export default App;
