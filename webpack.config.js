const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
  output: {
    path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
    filename: "bundle.js" // Tên file được build ra
  },
  externals: {
    cesium: "Cesium"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // Chứa các plugins sẽ cài đặt trong tương lai
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: "node_modules/cesium/Build/Cesium",
        to: "cesium",
      },
    ],),
    new HtmlTagsPlugin({
      append: false,
      tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    }),
  ]
};