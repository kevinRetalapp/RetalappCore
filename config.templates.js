const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const production = "production";
const cssConfig = {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  }

const resolve = {
    extensions: [".js", ".jsx", ".css"],
    modules: ["node_modules"],
  }

const optimizeCss = {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
  }

const pluginsCss = [new MiniCssExtractPlugin()];
  module.exports = {production,cssConfig,resolve,optimizeCss,pluginsCss}
