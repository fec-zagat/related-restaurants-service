const path = require('path');

const DIST_DR = path.join(__dirname, '/public');
const SRC_DR = path.join(__dirname, '/client');

const config = {
  entry: `${SRC_DR}/components/App.jsx`,
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
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(woff(2)?|png|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};

module.exports = config;
