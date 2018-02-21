const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlWebpackPluginConfig = {
  title: 'React-template',
  template: 'src/index.pug'
}

module.exports = {
  devServer: {
    compress: true,
    port: 9000,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name]-[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/styles-[chunkhash].css'),
    new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
  ]
}
