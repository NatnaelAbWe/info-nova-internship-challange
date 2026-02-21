import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import { CourseDetailPage } from "./pages/CourseDetail";
import { useCourse } from "./api/courseLoad";
import "./styles/index.css";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";

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

import { useParams } from "react-router-dom";

const CourseDetailPageWrapper = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id || c.id === Number(id));

  if (!course) return <div className="p-20 text-center">Course not found</div>;

  return <CourseDetailPage course={course} />;
};

export default App;
