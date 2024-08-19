import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const SmartHeader4 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  let currentScroll = 0;

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useGSAP(() => {
    const header = headerRef.current;

    // Initial animation for the header
    gsap.from(header, {
      y: -100,
      opacity: 0,
      duration: 1.8,
      ease: 'power3.out',
    });

    // Staggered animation for menu items
    gsap.from(menuRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    });

    // Logo text animation
    gsap.from(logoRef.current, {
      opacity: 0,
      scale: 0.5,
      y: 20,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > currentScroll && scrollTop > 250) {
        // Scrolling down, hide the header
        gsap.to(header, {
          y: '-100%',
          ease: 'power1.out',
          duration: 0.5,
        });
      } else if (scrollTop < currentScroll && scrollTop > 0) {
        // Scrolling up but not at the top, show the header with glass effect
        gsap.to(header, {
          y: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Blurry glass effect
          backdropFilter: 'blur(10px)',
          ease: 'power1.out',
          duration: 0.5,
          onStart: () => (header.style.position = 'fixed'),
        });
      } else if (scrollTop <= 0) {
        // Back to the top, return to dark background
        gsap.to(header, {
          y: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'none',
          ease: 'power1.out',
          duration: 0.5,
          onStart: () => (header.style.position = 'fixed'),
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
    <header
      ref={headerRef}
      className="top-0 left-0 w-full bg-gray-900 text-white z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 ref={logoRef} className="text-2xl font-bold">
          Smart Header
        </h1>

        {/* Desktop Menu */}
        <nav ref={menuRef} className="hidden md:flex space-x-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-gray-800 ${
          isMenuOpen ? 'block' : 'hidden'
        } transition-all duration-300`}
      >
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-4 py-2 text-lg hover:bg-gray-700 transition-colors duration-200"
            onClick={toggleMenu}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default SmartHeader4;