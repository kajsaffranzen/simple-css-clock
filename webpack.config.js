var path = require('path');

module.exports = {
  context: __dirname + "/app",
  entry: "./main.js",

  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ],
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  },
  resolve: {
    extensions: [".js", ".scss"]
  }
};
