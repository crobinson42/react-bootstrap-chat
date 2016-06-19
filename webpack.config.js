var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Thanks for the bootstrapping tutorial for webpack @ Cassio de Sousa Antonio
 * http://www.pro-react.com/materials/appendixA/
 */

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + '/lib/main.js',
  output: {
    path: __dirname + '/build',

    // // this is so hot reloads work
    // publicPath: "http://localhost:8080/",
    filename: 'bundle.js',
  },
  devServer: {
    // publicPath : "http://localhost:8080/",
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true,

    // port: 8080,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
  plugins: [
   new HtmlWebpackPlugin({
      template: __dirname + '/dev/index.tmpl.html',
    }),
   new webpack.BannerPlugin('react-bootstrap-chat'),
   new webpack.HotModuleReplacementPlugin(),
 ],
};
