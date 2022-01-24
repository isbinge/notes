const webpack = require('webpack')
const webpackConfig = require('./webpack.dev')
const WebpackDevServer = require('webpack-dev-server')

const compiler = webpack(webpackConfig)

const server = new WebpackDevServer(webpackConfig.devServer, compiler)

server.startCallback(() => {
  console.log('run dev server....')
})
