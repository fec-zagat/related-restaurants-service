var path = require("path");

var DIST_DR = path.join(__dirname, "/public");
var SRC_DR = path.join(__dirname, "/client");

var config = {
  entry: `${SRC_DR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

module.exports = config;