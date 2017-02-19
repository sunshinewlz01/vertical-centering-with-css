let webpack = require('webpack');
let path = require('path');
let postcssImport = require('postcss-import');
let postcssNested = require('postcss-nested');
let cssnext = require('postcss-cssnext');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const AUTO_PREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 7.1',
];

let webpackConfig = {
  entry: './src/fe-app/modules/demo/app.js',
  output: {
    filename: 'demo.js',
    publicPath: 'http://127.0.0.1:8080/demo/resource/'
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
        loader : 'file-loader?name=demo.[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('demo.css')
  ],
  postcss: function plugins(bundler) {
    return [
      postcssImport({
        addDependencyTo: bundler,
      }),
      postcssNested(),
      cssnext({
        browsers:AUTO_PREFIXER_BROWSERS
      })
    ];
  }
};

module.exports = webpackConfig;
