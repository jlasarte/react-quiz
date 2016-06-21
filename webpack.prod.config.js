var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
     path: BUILD_PATH,
     publicPath: '/',
     filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
        { test: /\.js?$/,
          loader: 'babel',
          exclude: path.join(__dirname, 'node_modules') },
        { test: /\.scss?$/,
          loader: 'style!css!sass',
          include: path.join(__dirname, 'src', 'styles') },
        { test: /\.png$/,
          loader: 'file' },
        { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file'}
    ]
  }
};


