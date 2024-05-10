import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),  // Enables features needed for React
    svgr(),   // Transforms SVGs into React components
  ],
  build: {
    outDir: 'dist',  // Default is 'dist', ensure this is what you intend
    // Ensure paths are set correctly
  },
  server: {
    // Serve from the root directory
    // This will start the local server and serve your application at http://localhost:3000
    // This will help bypass CORS restrictions
    base: '/',
  },
});
