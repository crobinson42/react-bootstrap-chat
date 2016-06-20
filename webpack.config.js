var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Thanks for the bootstrapping tutorial for webpack @ Cassio de Sousa Antonio
 * http://www.pro-react.com/materials/appendixA/
 */

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + '/lib/development.entry.js',
  output: {
    path: __dirname + '/build',

    // // this is so hot reloads work
    publicPath: "http://localhost:8080/",
    filename: 'bundle.js',
    library: 'react-bootstrap-chat',
    libraryTarget: 'umd',
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
        query : {
            "presets": ["es2015","react"],
            "env": {
              "development": {
              "plugins": [["react-transform", {
                 "transforms": [{
                   "transform": "react-transform-hmr",
                   "imports": ["react"],
                   "locals": ["module"]
                 }]
               }]]
              }
            }
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },

      // @NOTE these loaders are req'd for bootstrap-webpack
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
    ],
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: __dirname + '/dev/index.tmpl.html',
  }),
  new webpack.BannerPlugin('react-bootstrap-chat'),
  new webpack.HotModuleReplacementPlugin(),

   // this is required for bootstrap.js
   new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       }),
 ],
};
