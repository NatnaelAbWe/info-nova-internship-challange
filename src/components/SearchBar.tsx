import SearchIcon from "@mui/icons-material/Search";
import type { SearchBarProps } from "../types/courses.ts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SearchBar = ({
  searchItem,
  setSearchItem,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
}: SearchBarProps) => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto mt-10 px-6">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-4 gap-4">
        {/* Text Search */}
        <div className="flex flex-[2] w-full items-center border border-gray-200 rounded-lg px-4 py-3 hover:border-[#FF6B00] focus-within:border-[#FF6B00] transition-all group">
          <SearchIcon
            className="text-gray-400 group-hover:text-[#FF6B00]"
            sx={{ fontSize: 20 }}
          />
          <input
            type="text"
            placeholder="Search courses, instructors..."
            className="w-full outline-none text-gray-700 placeholder:text-gray-400 text-sm ml-2"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative flex-1 w-full group">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-transparent border border-gray-200 rounded-lg px-4 py-3 outline-none text-gray-500 text-sm cursor-pointer appearance-none hover:border-[#FF6B00] transition-all"
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Security">Security</option>
          </select>
          <KeyboardArrowDownIcon
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#FF6B00] pointer-events-none"
            sx={{ fontSize: 18 }}
          />
        </div>

        {/* Level Dropdown */}
        <div className="relative flex-1 w-full group">
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="w-full bg-transparent border border-gray-200 rounded-lg px-4 py-3 outline-none text-gray-500 text-sm cursor-pointer appearance-none hover:border-[#FF6B00] transition-all"
          >
            <option value="">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <KeyboardArrowDownIcon
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#FF6B00] pointer-events-none"
            sx={{ fontSize: 18 }}
          />
        </div>
      </div>
    </div>
  );
};
