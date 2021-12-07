// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// var entries = {
//   pack1: './packages/testCdn/src/index.js',
//   pack2: './packages/examplesComponent/index.js'
// };

// module.exports = {
//   entry:  { ...entries },
//   mode: "production",
//   output: {
//     path: path.resolve(__dirname, "build"),
//   },

//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader"],
//       },
//     ],
//   },
//   optimization: {
//     minimizer: [new CssMinimizerPlugin()],
//     minimize: true,
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.css'],
//     modules: [
//       'node_modules'
//     ]        
// },
//   plugins: [new MiniCssExtractPlugin()],
// };
