import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
});
