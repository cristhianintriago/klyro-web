import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ─────────────────────────────────────────────────────────────
// IMPORTANTE: cambia "klyro-web" por el nombre exacto de tu repo
// Si tu repo se llama "usuario.github.io" → base: "/"
// Si tu repo se llama "klyro-web"         → base: "/klyro-web/"
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/klyro-web/", // 👈 cambia esto por el nombre de tu repo
});
