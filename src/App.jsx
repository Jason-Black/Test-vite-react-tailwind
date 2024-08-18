
import Play from './components/play';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Contactpage from './components/contactpage';
import Footer from './components/footer';
import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Timeline from './components/timeline';


function app() {
  return (
      <div className='app'>
        <Intro />
        <Portfolio />
        <Contactpage />
        <Timeline />
        <Footer />
        <Play />

       
      </div>
  )
}

export default app;