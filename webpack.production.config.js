var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    __dirname + "/lib/production.entry.js",
  ],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    library: 'react-bootstrap-chat',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query : {
            "presets": ["es2015","react"],
        },
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      minimize: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],

}
