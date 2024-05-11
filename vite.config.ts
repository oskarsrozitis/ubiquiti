import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), // Enables features needed for React
    svgr(), // Transforms SVGs into React components
  ],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@common": "/src/components/Common",
      "@icons": "/src/components/Common/Icons",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
    },
  },
  build: {
    rollupOptions: {
      output: {
        // This ensures that all asset paths in the output HTML are relative
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
  base: "./",
});
