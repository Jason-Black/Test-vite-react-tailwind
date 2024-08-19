import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const SmartHeader3 = () => {
    const headerRef = useRef(null);
    let currentScroll = 0;
  
    useGSAP(() => {
      const header = headerRef.current;
  
      // Initial animation for the header (animates in with dark background)
      gsap.fromTo(
        header,
        { y: -100, opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        { y: 0, opacity: 1, duration: 1.8, ease: 'power3.out' }
      );
  
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
  
        if (scrollTop > currentScroll && scrollTop > 250) {
          // Scrolling down and sticky
          gsap.to(header, {
            y: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Blurry glass effect
            backdropFilter: 'blur(10px)',
            ease: 'power1.out',
            duration: 0.5,
          });
        } else if (scrollTop < currentScroll && scrollTop > 0) {
          // Scrolling up but not at the top
          gsap.to(header, {
            y: 0,
            ease: 'power1.out',
            duration: 0.5,
          });
        } else if (scrollTop <= 0) {
          // Back to the top, return to dark background
          gsap.to(header, {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'none',
            ease: 'power1.out',
            duration: 0.5,
          });
        }
  
        currentScroll = scrollTop;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header ref={headerRef} className="dm-smart-scroller">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Smart Header</h1>
  
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors duration-200 relative group">
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </a>
            ))}
          </nav>
  
          <button className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    );
  };
  
  export default SmartHeader3;