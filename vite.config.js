import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'gsap/SplitText': "gsap/SplitText",
      'gsap/ScrollTrigger': "gsap/dist/ScrollTrigger"
    },
  },
  optimizeDeps: {
    include: ['gsap', "gsap/SplitText", "gsap/ScrollTrigger"],
  },
})