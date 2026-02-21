export const Footer = () => {
  return (
    <footer className="bg-[#0B1221] text-gray-400 py-16 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left mb-12">
          {/* Column 1*/}
          <div className="md:col-span-6">
            <h3 className="text-white text-lg font-bold mb-6">
              INFNOVA Academy
            </h3>
            <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              Empowering learners worldwide with cutting-edge technology
              courses. Start your journey to success with expert-led training.
            </p>
          </div>

          {/* Column 2s */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Courses
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Instructors
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          {/* Column 3*/}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                FAQ
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-xs tracking-wide">
            © 2026 INFNOVA Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
