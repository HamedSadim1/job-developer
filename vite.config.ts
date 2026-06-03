import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      include: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      plugins: ["babel-plugin-react-compiler"],
    }),
  ],
});
