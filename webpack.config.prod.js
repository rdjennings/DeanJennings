// Strict mode
'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack')
const prod = process.argv.indexOf('-p') > -1
let prodItems = {}
let warnings = {}
if (!prod) {
  prodItems = {
    devtool: "inline-source-map",
    devServer: { inline: true }
  }
} else {
  warnings = {
    'stats': 'errors-only'
  }
}
module.exports = {
  // This is the "main" file which should include all other modules
  entry: {
    app: './src/main.js',
    vendor: ['jQuery', 'materialize-css']
  },
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: './dist',
    // With the filename `build.js` so it's dist/build.js
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
      /* chunkName= */"vendor",
      /* filename= */"vendor.bundle.js"
    ),
    new CopyWebpackPlugin([
      { from: './src/static' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }) /*,
    new DashboardPlugin() */
  ],
  prodItems,
  warnings,
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