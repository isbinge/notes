const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const path = require('path')
const commonConfig = require('./webpack.config')
const { config } = require('webpack')

const isAnalyzeBundle = !!process.env.OPEN_ANALYZER

const baseConfig = {
  entry: commonConfig.entry,

  output: {
    filename: 'js/[name].[hash:5].hash.js',
    path: commonConfig.output,
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:5].contenthash.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: config.isProd,
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: config.isProd,
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'less-loader',
          },
        ],
      },
      {
        test: /\.vue/,
        loader: 'vue-loader',
        resolve: {
          extensions: ['.ts', '.vue', '.js'], // added .js
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: { appendTsxSuffixTo: [/\.vue$/] },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new FaviconsWebpackPlugin('/path/to/logo.png'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/template.html'),
      title: 'demo',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
    }),
  ],
}
if (isAnalyzeBundle) {
  baseConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = baseConfig
