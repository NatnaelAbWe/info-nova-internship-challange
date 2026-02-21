import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/Link.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-max-7xl mx-auto border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6 md:px-10">
        <div className="flex shrink-0 items-center">
          <img
            src={Logo}
            alt="infnova logo"
            className="h-8 w-auto"
            loading="lazy"
          />
        </div>

        <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
          <a
            href="#"
            className="text-sm font-semibold text-gray-600 hover:text-[#FF6B00] transition-colors"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-600 hover:text-[#FF6B00] transition-colors"
          >
            Instructors
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-600 hover:text-[#FF6B00] transition-colors"
          >
            Resources
          </a>
        </div>

        <div className="hidden shrink-0 items-center gap-6 md:flex">
          <button className="text-sm font-bold text-gray-900 hover:text-[#FF6B00] transition-colors">
            Sign In
          </button>
          <button className="rounded-lg bg-[#FF6B00] px-6 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95 shadow-orange-200">
            Join Now
          </button>
        </div>

        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-5 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4">
          <a
            href="#"
            className="text-lg font-medium text-gray-600 hover:text-[#FF6B00]"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-600 hover:text-[#FF6B00]"
          >
            Instructors
          </a>
          <a
            href="#"
            className="text-lg font-medium text-gray-600 hover:text-[#FF6B00]"
          >
            Resources
          </a>
          <hr className="border-gray-100" />
          <div className="flex flex-col gap-4">
            <button className="w-full py-3 text-lg font-bold text-gray-900 border border-gray-200 rounded-xl">
              Sign In
            </button>
            <button className="w-full py-3 rounded-lg bg-[#FF6B00] text-white font-bold shadow-lg shadow-orange-200">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
