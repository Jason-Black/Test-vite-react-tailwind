import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import gsap from 'gsap';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['gsap/ScrollTrigger', 'gsap/SplitText']
  }
});