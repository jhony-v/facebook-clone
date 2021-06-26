const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const commonWebpack = require("./webpack.config.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  /**
   * @type import("webpack").Configuration
   */
  const configuration = {
    optimization: {
      runtimeChunk: true,
      minimize: true,
      splitChunks: {
        chunks: "all",
      },
      minimizer: ["...", new CssMinimizerPlugin()],
    },
    plugins: [
      ...(env.report ? new BundleAnalyzerPlugin() : []),
      new CleanWebpackPlugin(),
    ],
    mode: "production",
  };

  return merge(commonWebpack, configuration);
};
