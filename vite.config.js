import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ============================
// 🧩 Configuration Vite du projet
// ============================
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: "dist"
  }
});
