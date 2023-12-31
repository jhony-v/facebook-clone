import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["node_modules", "./src"]
      }
    }
  },
  server: {
    port: 3001,
    open: true,
    host: "localhost"
  }
});
