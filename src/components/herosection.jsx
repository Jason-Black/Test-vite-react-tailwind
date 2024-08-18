import React from 'react';

function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white h-screen flex flex-col justify-center items-center">
      {/* Gradient background (bg-gradient-to-r), text color (text-white), height (h-screen), and flexbox for centering */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight">
        {/* Text size adjusts responsively (text-4xl sm:text-5xl md:text-6xl), text alignment (text-center), and line height (leading-tight) */}
        Welcome to Your Future
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-center max-w-xl">
        {/* Margin-top (mt-4), text size (text-lg sm:text-xl md:text-2xl), max width (max-w-xl) to control the paragraph width */}
        Explore the possibilities with our innovative solutions designed to propel your business forward.
      </p>
      <button className="mt-8 bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-purple-100 transition duration-300 ease-in-out">
        {/* Button background (bg-white), text color (text-purple-700), padding (py-3 px-8), border radius (rounded-full), and hover effects */}
        Get Started
      </button>
    </div>
  );
}

export default HeroSection;
