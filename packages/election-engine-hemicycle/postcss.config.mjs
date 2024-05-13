import tailwindcss from "tailwindcss";
import { tailwindConfig } from "./tailwind.config.mjs";
import autoprefixer from "autoprefixer";
const postCssConfig = {
  plugins: [tailwindcss(tailwindConfig), autoprefixer],
};

export default postCssConfig;
