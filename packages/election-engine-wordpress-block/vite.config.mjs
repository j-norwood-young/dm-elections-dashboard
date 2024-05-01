import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: "",
    build: {
        lib: {
            entry: "src/svelte/app.js",
            name: "election-engine-svelte",
            fileName: (format) => `election-engine.${format}.js`,
			sourcemap: true
        },
        outDir: "svelte/app",
		sourcemap: "inline"
    },
});
