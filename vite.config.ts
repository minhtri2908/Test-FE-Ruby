import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(/*...*/)],
  server: {
    proxy: {
      '/api/student_scores': {
        target: 'https://rails-thpt2024.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
});

