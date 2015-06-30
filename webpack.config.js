
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./docs/data')

module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'docs.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css/, loader: 'css-loader!postcss-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('docs.js', ['/'], data)
  ],

  //cssnext: {
  //  compress: true
  //}

}

