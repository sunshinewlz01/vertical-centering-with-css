var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = module.exports = {
  entry:['./src/fe-app/modules/demo/app.js'],
  output: {
    filename: 'demo.js',
    publicPath: "http://localhost:8080/demo/resource/",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test   : /\.(png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader?name=[demo].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('demo.css')
  ],
  devtool: '#inline-source-map'
}
