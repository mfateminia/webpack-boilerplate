const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge'); // to enable mergin of common config file
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js', // hash is to handle cache busting
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()] // to clean dist folder of old built files
});