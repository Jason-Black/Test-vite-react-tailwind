
import Play from './components/play';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Contactpage from './components/contactpage';
import Footer from './components/footer';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import FeatureSection from './components/featuresection';
import TestimonialSection from './TestimonialSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import CallToActionSection from './components/calltoaction';
import HeroSection2 from './components/HeroSection2';

import Header2 from './components/Header2';



function app() {
  return (
      <div className='app'>
   
        <HeroSection />
        <Header2 />
        <Intro />
        <Navbar />
        <TestimonialSection />
        <FeatureSection />
        <HeroSection2 />
        <ServicesSection />
        <PortfolioSection />
        <CallToActionSection />
        <Portfolio />
        <Contactpage />
        <Timeline />
        <Footer />
        <Play />

       
      </div>
  )
}

export default app;