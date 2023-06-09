const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const commonCSSLoaderOptions = {
  importLoaders: 2,
  url: false
};

const cssLoaderOptions = {
  ...commonCSSLoaderOptions,
  modules: false
};

const scssLoaderOptions = {
  ...commonCSSLoaderOptions,
  modules: true,
  localIdentName: '[name]_[local]--[hash:base64:5]'
};

const postCSSLoaderOptions = {
  ident: 'postcss',
  plugins: () => [autoprefixer(),],
};

module.exports = {
  entry: ['./src/index.tsx', './src/assets/css/common.css'],
  output: {
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@src': path.resolve('./src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'scss']
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        },]
      },
      {
        test: /\.(css)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: cssLoaderOptions },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: scssLoaderOptions },
          { loader: 'postcss-loader', options: postCSSLoaderOptions },
          { loader: 'sass-loader' },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'device': JSON.stringify('mobile'),
      }
    }),
  ],
};
