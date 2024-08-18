import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function HeroSection2() {
  useGSAP(() => {
    // GSAP Animations
    gsap.from(".hero-heading", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".hero-subheading", {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power3.out",
      delay: 1,
    });

    ///THIS animation is not working correct
    gsap.from(".hero-button", {
      duration: 10.5,
      opacity: 0,
      scale: 0.5,
  
      delay: 1.5,
    });

    gsap.fromTo(
      ".animated-element",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 2,
        stagger: 0.3,
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="text-center px-4 sm:px-6 md:px-8">
        <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4">
          Transform Your Ideas
        </h1>
        <p className="hero-subheading text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8">
          Into Reality with Our Innovative Solutions
        </p>
        <button className="hero-button bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 rounded-full animated-element"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-white opacity-20 rounded-full animated-element"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-white opacity-20 rounded-full animated-element"></div>
    </div>
  );
}

export default HeroSection2;
