require('dotenv').config();
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

const webpackCommonConfig = require('./webpack.config.common');
const webpackDevConfig = require('./webpack.config.dev');
const webpackAlphaConfig = require('./webpack.config.alpha');
const webpackProdConfig = require('./webpack.config.prod');

const MODE = {
  DEV: 'development',
  ALPHA: 'none',
  PROD: 'production',
};

module.exports = function(env, argv) {
  const { mode  } = argv;

  switch (mode) {
    case MODE.DEV:
    return webpackMerge(webpackCommonConfig, webpackDevConfig);

    case MODE.ALPHA:
	  return webpackMerge(webpackCommonConfig, webpackAlphaConfig);

    case MODE.PROD:
      return webpackMerge(webpackCommonConfig, webpackProdConfig);

    default:
      throw new Error('invalid MODE');
  }
};
