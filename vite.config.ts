import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),
    viteStaticCopy({
      targets: [
        {
          src: "static.json", // file gốc
          dest: "."            // copy vào thư mục dist/
        }
      ]
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://rails-thpt2024.onrender.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
