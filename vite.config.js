import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // csp({
    //   policies: {
    //     "default-src": ["'self'"],
    //     "frame-src": [
    //       "'self'",
    //       "https://www.youtube.com",
    //       "https://drive.google.com",
    //     ],
    //     "script-src": ["'self'"],
    //     "style-src": ["'self'"],
    //   },
    // }),
  ],
});
