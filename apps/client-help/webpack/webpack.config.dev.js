const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLWebpackPlugin = require("html'webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @type import("webpack").Configuration
 */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "'[contenthash].bundle.js'",
  },
  module: {
    rules: [
      {
        test: /.\tsx?$/i,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [ ".ts", ".tsx", ".js" , ".jsx", ".json"]
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    splitChunks: {
      chunks: "all",
    },
    minimizer: [ new CssMinimizerPlugin() ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
        filename: 'assets/css/[contenthash].css',
    }),
    new MiniCssExtractPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin()
  ],
};
