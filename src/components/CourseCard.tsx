import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import type { Course } from "../types/courses";
import { Link } from "react-router-dom";

export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link to={`/course/${course.id}`} className="block">
      <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="relative">
          <img
            src={course.thumbnail || "https://via.placeholder.com/300"}
            alt={course.title}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Status Badge */}
          <span className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm">
            {course.level || "Intermediate"}
          </span>
        </div>

        <div className="p-6 text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF6B00]">
            {course.category}
          </span>
          <h3 className="mt-2 line-clamp-1 text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">
            {course.title}
          </h3>

          <p className="mt-3 text-sm text-gray-500">
            Instructor:{" "}
            <span className="text-gray-900 font-semibold">
              {course.instructor || course.intstructor}
            </span>
          </p>

          <div className="mt-6 border-t border-gray-50 pt-5 flex items-center justify-between text-gray-400 text-xs font-medium">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <AccessTimeIcon
                  sx={{ fontSize: 16 }}
                  className="text-gray-300"
                />
                <span>{course.length} weeks</span>
              </div>

              <div className="flex items-center gap-1.5">
                <GroupIcon sx={{ fontSize: 16 }} className="text-gray-300" />
                <span>{(course.people ?? 0).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
              <StarIcon sx={{ fontSize: 16, color: "#FACC15" }} />
              <span className="font-bold text-gray-900">{course.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
