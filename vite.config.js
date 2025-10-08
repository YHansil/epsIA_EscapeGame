<<<<<<< HEAD
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
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173 }
});
>>>>>>> 5dee8d7 (Maj--> finalisation puzzle + config enigme 2 et 3)
