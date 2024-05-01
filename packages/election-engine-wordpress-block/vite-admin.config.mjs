import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: "",
    build: {
        lib: {
            entry: "src/svelte/admin.js",
            name: "election-engine-svelte",
            fileName: (format) => `election-engine-admin.${format}.js`
        },
		rollupOptions: {
			output: {
				assetFileNames: "election-engine-admin.[ext]",
			}
		},
        outDir: "svelte/admin"
    },
});
