import SearchIcon from "@mui/icons-material/Search";
import type { SearchBarProps } from "../types/courses.ts";

export const SearchBar = ({
  searchItem,
  setSearchItem,
}: Pick<SearchBarProps, "searchItem" | "setSearchItem">) => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto mt-10 px-6">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-4 gap-4 md:h-25">
        <div className="flex flex-[2] items-center border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
          <SearchIcon className="text-gray-400 mr-2" sx={{ fontSize: 20 }} />
          <input
            type="text"
            placeholder="Search courses, instructors..."
            className="w-full outline-none text-gray-600 placeholder:text-gray-400 text-sm"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>

        <div className="hidden md:flex flex-1 items-center border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
          <select className="w-full bg-transparent outline-none text-gray-400 text-sm cursor-pointer appearance-none">
            <option value="">Category</option>
          </select>
        </div>

        <div className="hidden md:flex flex-1 items-center border border-gray-200 rounded-lg px-4 py-2 hover:border-gray-300 transition-colors">
          <select className="w-full bg-transparent outline-none text-gray-400 text-sm cursor-pointer appearance-none">
            <option value="">Level</option>
          </select>
        </div>
      </div>
    </div>
  );
};
