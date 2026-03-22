import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ─────────────────────────────────────────────────────────────
// IMPORTANTE: cambia "klyro-web" por el nombre exacto de tu repo
// Si tu repo se llama "usuario.github.io" → base: "/"
// Si tu repo se llama "klyro-web"         → base: "/klyro-web/"
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react()],
  base: "/klyro-web/", // 👈 cambia esto por el nombre de tu repo
});
