const path = require('path')

console.log(process.cwd(), __dirname)
module.exports = {
  root: path.resolve(__dirname, '../'),
  publicPath: '',
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: path.resolve(__dirname, '../dist'),
  isProd: process.env.NODE_ENV === 'production',
}
