const path = require('path')
const { merge } = require('webpack-merge') // 合并配置项

const baseWebpackConfig = require('./webpack.common.config')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: resolve('../src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: resolve('../dist'),
    filename: 'js/[contenthash:16].[name].js',
  },
  devServer: {
    publicPath: '/',
    compress: true, // gzip压缩
    host: 'localhost', // 允许ip访问
    open: true, // 打开浏览器
    hot: true, // 热更新
    quiet: true, // 不显示webpack的错误或警告
    historyApiFallback: true, // 解决启动后刷新404
    port: 8080, // 端口
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {
          '^/api': '/',
        },
        changeOrigin: true,
      },
    },
  },
  plugins: [],
})
