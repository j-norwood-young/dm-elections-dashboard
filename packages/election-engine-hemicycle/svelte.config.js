import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      dir: "dm",
      pages: "dm",
      assets: "dm",
      fallback: "index.html",
      precompress: true,
      strict: false,
    }),
    paths: {
      base: "/dm",
      relative: true,
    },
  },
};

export default config;
