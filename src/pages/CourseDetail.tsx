import { useEffect } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarIcon from "@mui/icons-material/Star";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import type { Course } from "../types/courses";

export const CourseDetailPage = ({ course }: { course: Course }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const instructorName = course?.instructor || "Not  Available";

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FF6B00] font-medium transition-color"
        >
          <ArrowBackIcon sx={{ fontSize: 18 }} />
          Back to Courses
        </Link>
      </div>

      {/* 2. Hero Section */}
      <section className="bg-[#FF6B00] py-16 px-6 md:px-10 text-white relative max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 text-left">
            <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold opacity-90">
              {course?.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              {course?.title}
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mb-8 leading-relaxed">
              Master the essentials of {course?.title} with our
              industry-standard curriculum designed to take you from beginner to
              professional.
            </p>

            {/* Course Info */}
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold">
                  {getInitials(instructorName)}
                </div>
                <span>
                  Instructor:{" "}
                  <span className="font-bold">{instructorName}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AccessTimeIcon sx={{ fontSize: 18 }} />
                <span>{course?.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <PeopleOutlineIcon sx={{ fontSize: 18 }} />
                <span>
                  {(course?.enrolled || 2015).toLocaleString()} enrolled
                </span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300">
                <StarIcon sx={{ fontSize: 18 }} />
                <span>{course?.rating} rating</span>
              </div>
            </div>

            <div className="mt-8 inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
              {course?.level || "Intermediate"} Level
            </div>
          </div>

          <div className="hidden md:block md:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video bg-orange-600">
              <img
                src={course?.thumbnail}
                alt={course?.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 pb-20">
        <div className="lg:col-span-8 space-y-12 text-left">
          {/* What You'll Learn section*/}
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <MenuBookIcon className="text-[#FF6B00]" />
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Industry Standards",
                "Practical Projects",
                "Real-world Logic",
                "Optimization",
                "Final Certification",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircleOutlineIcon
                    className="text-green-500"
                    sx={{ fontSize: 20 }}
                  />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Description about the course */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Course Description
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                This course provides a deep dive into {course?.category}. You
                will explore the core foundations while building practical
                skills through hands-on labs.
              </p>
              <p>
                By the end of this program, you will have a professional-grade
                portfolio piece and the confidence to tackle real-world
                challenges in this field.
              </p>
            </div>
          </section>

          {/* Instructor Name and Profile */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Your Instructor
            </h2>
            <div className="flex items-start gap-6">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#FF6B00] flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg">
                {getInitials(instructorName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {instructorName}
                </h3>
                <p className="text-[#FF6B00] text-sm mt-1 mb-3 font-semibold uppercase tracking-wide">
                  Senior Industry Expert
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  With over a decade of experience in {course?.category}, your
                  instructor brings practical knowledge directly from the field
                  to your screen.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ticky Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-left">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
              Enroll Today
            </h3>
            <p className="text-gray-500 text-sm mb-8 font-medium">
              Join {(course?.enrolled || 2015).toLocaleString()} students
              already enrolled
            </p>

            <button className="w-full bg-[#FF6B00] text-white font-bold py-4 rounded-xl hover:bg-[#e66000] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-200 mb-4">
              Enroll Now
            </button>

            <button className="w-full bg-white text-[#FF6B00] border border-orange-100 font-bold py-4 rounded-xl hover:bg-orange-50 transition-all mb-8">
              Add to Wishlist
            </button>

            <div className="space-y-4 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-[0.15em] mb-4">
                This course includes:
              </h4>
              {[
                `${course?.duration} of content`,
                "Lifetime access",
                "Certificate of completion",
                "Access on mobile and desktop",
                "Downloadable resources",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <CheckCircleOutlineIcon
                    className="text-green-500"
                    sx={{ fontSize: 18 }}
                  />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
