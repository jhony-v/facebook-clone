const webpackCommon = require("./webpack.config.common")
const { merge } = require("webpack-merge")

module.exports = merge(
  {
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
    mode: "development",
  },
  webpackCommon
)
