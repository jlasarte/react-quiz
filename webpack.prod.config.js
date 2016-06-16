var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
//var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var BUILD_PATH = path.join(__dirname, 'build');

module.exports = {
  devtool: 'source-map',
  entry: [
    //'webpack-dev-server/client?http://127.0.0.1:3000',
    //'webpack/hot/only-dev-server',
    //'./src/index.jsx'
    './src/index'
    //APP_PATH,
  ],
  output: {
     path: BUILD_PATH,
     publicPath: '/build/',
     filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    //new webpack.HotModuleReplacementPlugin(),
    /*new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })*/
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
  /*
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
      contentBase: './build',
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
  }
  */
};
