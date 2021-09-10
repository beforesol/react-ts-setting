const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '10.25.137.37',
    port: 8888,
    hot: true,
    historyApiFallback: true,
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api/': {
        target: 'https://jsonplaceholder.typicode.com/',
        changeOrigin: true,
      },
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'server': JSON.stringify('dev'),
      }
    }),
  ],
};
