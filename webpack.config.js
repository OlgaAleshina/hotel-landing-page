const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const webpack = require("webpack");

const config = {
  entry: {
    app: ["./src/index.js", "./src/test.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
    new miniCss({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"]
      }
    ]
  }
};
module.exports = (env, argv) => {
  if (argv.mode === "development") {
  }
  if (argv.mode === "production") {
  }
  return config;
};
