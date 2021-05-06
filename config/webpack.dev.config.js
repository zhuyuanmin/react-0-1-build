const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: ['babel-loader?cacheDirectory=true'],
        exclude: /(node_modules|bower_components)/,
        // include: path.join(__dirname, '../src')
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true, // gzip压缩
    host: 'localhost', // 允许ip访问
    hot: true, // 热更新
    historyApiFallback: true, // 解决启动后刷新404
    port: 8080, // 端口
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
}
