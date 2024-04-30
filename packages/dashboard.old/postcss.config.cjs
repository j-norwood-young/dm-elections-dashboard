// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwind = require('tailwindcss');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./tailwind.config.cjs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer');
const postCssConfig = {
    plugins: [tailwind(config), autoprefixer]
};
module.exports = postCssConfig;