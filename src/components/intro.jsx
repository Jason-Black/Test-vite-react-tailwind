import React from 'react';
import './Intro.css'; // We will create a custom CSS file for some of the styles


function intro() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black via-blue-600 to-black text-white relative overflow-hidden">
      {/* Main content goes here */}
      <div className="text-center space-content z-10 px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
          Welcome to Space
        </h1>
        <p className="mt-4 text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl">
          Explore the final frontier with us!
        </p>
        <button className="mt-8 px-6 py-3 bg-indigo-500 hover:bg-indigo-700 text-white font-semibold rounded-full transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
      <div className="absolute inset-0 bg-stars"></div>
        Intro
            <h1 className='text-4xl md:text-7xl font-bold mb-1 md:mb-3 '>First H1</h1>
            <p className='text-base md:text-xl mb-3 text-white-900 font-medium '>This is the first paragraph with lots of words</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-amber-700 leading-relaxed sm:leading-loose md:leading-loose lg:leading-loose xl:leading-loose p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-md"> This is more info that should be a lot of words so you have to fix the style</p>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-fuchsia-600 leading-snug sm:leading-normal md:leading-relaxed lg:leading-loose p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg'>This is h2 styled text</h1>
            <button class="bg-gray-200 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
            Hover over me!
            </button>
            
            <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transform hover:bg-blue-700 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
  Hover over me!
</button>
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 hover:text-gray-100 hover:shadow-lg transition duration-300">
  Hover over me!
</button>
<div class="transform hover:rotate-6 hover:scale-105 transition duration-300 ease-in-out">
  Hover to rotate and scale!
</div>
<button class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 hover:scale-110 transition duration-500 ease-in-out">
  Hover with animation!
</button>
<a
  href="https://www.example.com"
  class="text-blue-500 font-semibold text-lg transition-transform duration-500 ease-out transform hover:underline hover:text-pink-500 hover:scale-125 hover:rotate-6 hover:skew-x-3 hover:shadow-2xl"
>
  Hover over me!
</a>
<a
        href="https://www.example.com"
        className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 font-semibold text-lg transition-all duration-500 ease-out transform hover:text-glow hover:scale-110  hover:shadow-2xl custom-underline"
      >
        Supposed to be cool
      </a>
      <a
        href="https://www.example.com"
        className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 font-bold text-xl transition-transform duration-500 ease-in-out transform hover:text-glow hover:scale-110 hover:skew-y-3 fire-effect relative hover-me"
      >
        Hover me for Fire!
      </a>

      
      <a
        href="https://www.example.com"
        className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 font-bold text-2xl transition-transform duration-700 ease-in-out transform hover:scale-125 hover:translate-y-2 space-effect"
      >
        Hover for Space!
      </a>
      <div className="w-full h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
  i am content
</div>
<div className="w-4/5 h-3/4 border-4 border-white rounded-lg">
 more conntent
</div>

<div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
  Your text here
</div>
        </div> //FINAL BOSS
  
    )
}

export default intro;