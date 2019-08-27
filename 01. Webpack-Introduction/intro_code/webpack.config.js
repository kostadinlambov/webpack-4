const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
