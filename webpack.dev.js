const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(
  config,
  {
    mode: 'development',
    devServer: {
      static: './dist',
      historyApiFallback: true,
      hot: true,
      port: 3000,
      open: true,
    },
  },
);
