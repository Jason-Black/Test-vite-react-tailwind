import React, { useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Header2() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  
  useGSAP(() => {
    // GSAP animation on header load
    gsap.from(".header", {
      duration: 1.5,
      y: -100,
      opacity: 0,
      ease: "power3.out",
    });

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100 && !menuOpen) {
        setHideHeader(true);
      } else if (window.scrollY < lastScrollY || menuOpen) {
        setHideHeader(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, menuOpen]);

  useGSAP(() => {
    if (hideHeader) {
      gsap.to(".header", { y: -100, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(".header", { y: 0, duration: 0.5, ease: "power3.out" });
    }
  }, [hideHeader]);

  useGSAP(() => {
    if (menuOpen) {
      gsap.to(".mobile-menu", { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(".mobile-menu", { y: -100, opacity: 0, duration: 0.5, ease: "power3.in" });
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyWebDesignFirm
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Services</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Portfolio</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Testimonials</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out">Contact</a>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu absolute top-16 left-0 w-full bg-gray-800 text-center md:hidden" style={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -100 }}>
        <a href="#services" className="block text-gray-300 hover:text-white py-2">Services</a>
        <a href="#portfolio" className="block text-gray-300 hover:text-white py-2">Portfolio</a>
        <a href="#testimonials" className="block text-gray-300 hover:text-white py-2">Testimonials</a>
        <a href="#contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
      </div>
    </header>
  );
}

export default Header2;
