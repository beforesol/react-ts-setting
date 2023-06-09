const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    filename: 'static/bundle.[hash].js',
    path: path.resolve('dist'),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin(
      [
        {
          from: path.resolve(__dirname, '../static'),
          to: path.resolve(__dirname, '../dist/static')
        }
      ]),
  ],
};
