import { CourseCard } from "../components/CourseCard";
import { SkeletonCard } from "../components/SkeletonLoading";
import { useCourse } from "../api/courseLoad";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Navbar } from "../components/NavBar";

const Home = () => {
  const { courses, isLoading, error } = useCourse();
  const [searchItem, setSearchItem] = useState("");

  const filteredCourses = courses.filter((course) => {
    const title = course.title?.toLowerCase() ?? "";
    const instructor = course.intstructor?.toLowerCase() ?? "";
    const search = searchItem.toLowerCase();

    return title.includes(search) || instructor.includes(search);
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-[#FF6B00] max-w-7xl py-16 px-10 text-white text-left mx-auto">
        <h1 className="text-6xl font-bold">Explore Our Courses</h1>
        <p className="mt-4 text-2xl opacity-90">
          Master new skills with expert-led courses designed for the modern{" "}
          <br />
          learner. Start your learning journey today with INFNOVA Academy.{" "}
        </p>
      </section>
      {/* search bar component */}
      <SearchBar
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        filteredCourses={courses.length}
        totalCount={0}
      />

      {/* Course Grid  */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <p className="text-gray-600 font-medium">
            Showing <span className="text-black">{courses.length}</span> courses
          </p>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}. Please try refreshing the page.
          </div>
        )}

        {/* Loading & Data Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? // Show 6 skeletons while loading
              Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
