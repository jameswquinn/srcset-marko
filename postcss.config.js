/*************************
module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano': {}
  }
}
**************************/
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
};
