import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import type { Course } from "../types/courses";

export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg">
      <div className="relative">
        <img
          src={course.image || "https://via.placeholder.com/300"}
          alt={course.title}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-full bg-[#E0E7FF] px-3 py-1 text-xs font-semibold text-[#4338CA]">
          Intermediate
        </span>
      </div>

      <div className="p-5 text-left">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00]">
          {course.category}
        </span>
        <h3 className="mt-1 line-clamp-1 text-lg font-bold text-gray-900">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Instructor:{" "}
          <span className="text-gray-900 font-medium">
            {course.intstructor}
          </span>
        </p>

        <div className="mt-4 border-t border-gray-100 pt-4 flex items-center justify-between text-gray-500 text-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <span>{course.length} weeks</span>
            </div>

            <div className="flex items-center gap-1">
              <GroupIcon sx={{ fontSize: 16 }} />
              <span>{(course.people ?? 0).toLocaleString()}</span>{" "}
            </div>
          </div>

          {/* MUI Icon - Star */}
          <div className="flex items-center gap-1">
            <StarIcon sx={{ fontSize: 18, color: "#FACC15" }} />
            <span className="font-bold text-gray-900">{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
