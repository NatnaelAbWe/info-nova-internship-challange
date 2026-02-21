import { CourseCard } from "../components/CourseCard";
import { SkeletonCard } from "../components/SkeletonLoading";
import { useCourse } from "../api/courseLoad";
const Home = () => {
  const { courses, isLoading, error } = useCourse();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#FF6B00] py-16 px-10 text-white text-left">
        <h1 className="text-6xl font-bold">Explore Our Courses</h1>
        <p className="mt-4 text-2xl opacity-90">
          Master new skills with expert-led courses designed for the modern{" "}
          <br />
          learner. Start your learning journey today with INFNOVA Academy.{" "}
        </p>
      </section>

      {/* Course Grid Container */}
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
