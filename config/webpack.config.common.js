const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const UitSpritesmithWebpack = require('@uit-spritesmith/webpack');

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

const root = path.resolve(__dirname);

module.exports = {
  //core-js/features/object: ie 대응
  entry: ['core-js/features/object', './src/index.tsx', './assets/css/common.css'],
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
    // new UitSpritesmithWebpack({
    //   spriteSrc: path.resolve('./assets/sprite'),
    //   spriteDest: path.resolve('./assets/img/sprite'),
    //   cssDest: path.resolve('./assets/scss/sprite'),
    //   imgURL: '/assets/img/sprite',
    //   prefix: 'sp_',
    //   ratio: 3,
    //   padding: 3,
    // }),
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
