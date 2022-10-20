const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const commonWebpack = require("./webpack.config.common");
const { merge } = require("webpack-merge");
const path = require("path");

/**
 * @type import("webpack").Configuration
 */
const configuration = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    contentBase: path.resolve(__dirname, "../dist"),
    index : "index.html",
    historyApiFallback: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  devtool: "eval-source-map",
  target: "web"
};

module.exports = merge(commonWebpack, configuration);
