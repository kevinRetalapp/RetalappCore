const path = require("path");
const config = require('./config.templates')
const {cssConfig,optimizeCss,resolve,production,pluginsCss} = config
module.exports = [
  {
    entry: {core: "/packages/core/lib/index.js",},
    output: {path: path.resolve(__dirname, "../packages/core/build/"), filename: "[name].js",},
    optimization: optimizeCss ,
    plugins: pluginsCss,
    module: cssConfig,
    mode: production,
    resolve,
  },
  {
    entry: {component: "/packages/component/lib/index.js",},   
    output: {path: path.resolve(__dirname, "../packages/component/build/"),filename: "[name].js",},
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          { test: /\.css$/, use: ['css-loader'] },
        ]
      },
    mode: production,
    resolve,
    
  }
];
