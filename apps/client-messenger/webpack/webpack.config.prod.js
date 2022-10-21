const webpackCommon = require("./webpack.config.common")
const { merge } = require("webpack-merge")

module.exports = merge(
  {
    mode: "production",
  },
  webpackCommon
)
