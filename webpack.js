'use strict'

const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, 'example/index'),
  },

  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js'
  },

  module: {
    loaders: [{
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        loose: 'all',
        stage: 0
      }
    }]
  }
}
