var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
    //APP_PATH,
  ],
  module: {
    loaders: [
        {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: APP_PATH
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
     path: BUILD_PATH,
     publicPath: '/',
     filename: 'bundle.js'
  },
  devServer: {
      contentBase: './build',
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
