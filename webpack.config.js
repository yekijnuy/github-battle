const path = require('path'); // comes with node, deals with file system
const HtmlWebpackPlugin = require('html-webpack-plugin'); // places html within our dist
const CopyPlugin = require('copy-webpack-plugin');

// commonJS to export an object with config settings for webpack
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    // from devServer, go here, then load React etc. to figure out request
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new CopyPlugin([{ from: '_redirects' }]),
  ],
  // don't try to handle requests like a server coming in
  // go back to the publicPath up top
  devServer: {
    historyApiFallback: true,
  },
};
