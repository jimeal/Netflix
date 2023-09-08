const autoprefixer = require("autoprefixer")
const postcssCombineMediaQuery = require("postcss-combine-media-query");
const postcssCsso = require("postcss-csso")

module.exports = {
  plugins: [
    autoprefixer,
    postcssCombineMediaQuery,
    postcssCsso({
      restructure: false
    })
  ]
}

// module.exports = {
//   plugins: [
//     require('autoprefixer'),
//     require('postcss-combine-media-query'),
//     require('postcss-csso')({
//       restructure: false
//     })
//   ]
// }