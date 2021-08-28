const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: 'assets/bundle.[hash].js',
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
          from: path.resolve(__dirname, '../../assets/mobile'),
          to: path.resolve(__dirname, '../../dist/assets/mobile')
        },
      ]
    ),
    new webpack.DefinePlugin({
      'process.env': {
        'server': JSON.stringify('alpha'),
      }
    }),
  ],
};
