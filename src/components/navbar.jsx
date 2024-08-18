import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      {/* Background color (bg-gray-800), padding (p-4), and shadow (shadow-lg) can be customized */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Max width (max-w-7xl) controls the container width, and flexbox properties ensure proper alignment */}
        <div className="text-white text-xl font-semibold">
          {/* Text color (text-white), font size (text-xl), and font weight (font-semibold) can be adjusted */}
          MyWebsite
        </div>
        <ul className="flex space-x-4">
          {/* Flexbox and space-x-4 ensure equal spacing between the links */}
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              {/* Text color (text-gray-300) and hover color (hover:text-white) can be adjusted */}
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;