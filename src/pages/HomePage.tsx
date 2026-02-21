import { useState } from "react";
import { CourseCard } from "../components/CourseCard";
import { SkeletonCard } from "../components/SkeletonLoading";
import { useCourse } from "../api/courseLoad";
import { SearchBar } from "../components/SearchBar";

const Home = () => {
  const { courses, isLoading, error } = useCourse();

  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // filter logic
  const filteredCourses = courses.filter((course) => {
    const search = searchItem.toLowerCase();
    const instructorName = course.instructor || "";

    const matchesSearch =
      course.title.toLowerCase().includes(search) ||
      instructorName.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#FF6B00] py-20 px-6 md:px-10 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Explore Our <span className="text-orange-200">Courses</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed">
            Master new skills with expert-led courses designed for the modern
            learner. Start your learning journey today with INFNOVA Academy.
          </p>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* Search Bar */}
      <SearchBar
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats Row */}
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
          <p className="text-gray-500 font-medium">
            Showing{" "}
            <span className="text-black font-bold">
              {filteredCourses.length}
            </span>{" "}
            of 8 courses
          </p>
          {(searchItem || selectedCategory || selectedLevel) && (
            <button
              onClick={() => {
                setSearchItem("");
                setSelectedCategory("");
                setSelectedLevel("");
              }}
              className="text-sm text-[#FF6B00] font-bold hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-6 rounded-2xl text-center border border-red-100">
            {error}. Please try refreshing the page.
          </div>
        )}

        {/* The Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
        </div>

        {/* Empty State */}
        {!isLoading && filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900">
              No matches found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
