const path = require('path');

const DIST_DR = path.join(__dirname, '/public');
const SRC_DR = path.join(__dirname, '/client');

const config = {
  entry: `${SRC_DR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
