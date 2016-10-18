/**
 * Created by ridel1e on 02/10/2016.
 */

'use strict';

const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

  context: __dirname + '/js/pages',

  entry: {
    main: './main.js',
    "day-tasks": './day-tasks.js'
  },

  output: {
    path: __dirname + '/public/js',
    filename: '[name].js'
  },

  watch: NODE_ENV === 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map": null,

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }],

  }
};

if(NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      drop_console: true,
      unsafe: true
    })
  );
}