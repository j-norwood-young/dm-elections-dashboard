import postCssConfig from "./postcss.config.mjs";
import path from "path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: postCssConfig,
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $components: path.resolve("./src/lib/components"),
      $common: path.resolve("../common"),
      $tabular: path.resolve("../tabular-data"),
    },
  },
});
