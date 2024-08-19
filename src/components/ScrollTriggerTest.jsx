import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerTest = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(boxRef.current, 
      { x: 0, opacity: 0 }, 
      { 
        x: 300, 
        opacity: 1, 
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // Trigger animation when the top of the box hits 80% of the viewport
          end: "top 20%", // End animation when the top of the box hits 20% of the viewport
          markers: true, // Show markers for debugging
          scrub: true // Smooth scrubbing
        }
      }
    );
  }, []);

  return (
    <div style={{ padding: '100vh 0', textAlign: 'center' }}>
      <div 
        ref={boxRef} 
        style={{ width: '100px', height: '100px', background: 'red', margin: '0 auto' }}
      >
        Scroll Me
      </div>
    </div>
  );
};

export default ScrollTriggerTest;
