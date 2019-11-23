// module.exports = {
//     plugins: {
//         "postcss-preset-env": {},
//         cssnano: {},
//         tailwindcss: {}
//     }
// };

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('cssnano')
    ],
};