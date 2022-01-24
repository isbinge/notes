const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      minSize: 20000,
      maxSize: 40000,
      maxAsyncRequests: 10,
      cacheGroups: {
        vendor: {
          // 抽离第三方插件
          test: /node_modules/, // 指定是node_modules下的第三方包
          chunks: 'initial',
          name: 'common', // 打包后的文件名，任意命名
          priority: 10, // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    host: '127.0.0.1',
    port: '8000',
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}

module.exports = merge(baseConfig, devConfig)
