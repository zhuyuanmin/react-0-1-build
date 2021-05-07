const path = require('path')
const webpack = require('webpack')
const HappyPack = require('happypack') // 多进程打包

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离 css

const resolve = dir => path.resolve(__dirname, dir)
const happyThreadPool = HappyPack.ThreadPool({
  size: 6,
})

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': resolve('../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: 'happypack/loader?id=babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.\w+$/i,
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
        include: resolve('../src'),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]',
              limit: 10240,
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'url-loader?esModule=false',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('../public/index.html'),
      inject: 'body',
      hash: true,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool,
      verboseWhenProfiling: false,
      verbose: false,
    }),
  ]
}
