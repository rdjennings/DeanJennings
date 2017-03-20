// Strict mode
'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['jQuery', 'materialize-css']
  },
  output: {
    path: './dist',
    filename: 'build-[name]--[hash].js'
  },
  build: {
    assetsPublicPath: '/test',
    assetsSubDirectory: 'static'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
/*      Vel: 'velocity-animate',
      $: 'jQuery',
      jQuery: 'jQuery' */
    }),
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor',
      /* filename= */'vendor.bundle.js'
    ),
    new webpack.optimize.CommonsChunkPlugin({
      children: true
    }),
    new CopyWebpackPlugin([
      { from: './src/static' }
    ])
 /*   new DashboardPlugin({ port: 8088 }) */
  ],
  devtool: "inline-source-map",
  devServer: { inline: true },
  module: {
    // Special compilation rules
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/,loader: 'style!css!autoprefixer!sass'},
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff2{0,1}$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.(otf|eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.js?$/, loaders: ['babel'], include: "./_js/",exclude: /node_modules/ },
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory=true' },
      { test: /\.vue?$/, loader: 'vue-loader' }
    ]
  }
}