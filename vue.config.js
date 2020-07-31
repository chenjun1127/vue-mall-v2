const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin 
module.exports = {
  publicPath: '/vue-mall',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end();

    config.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)); //忽略/moment/locale下的所有文件
    config.plugin('analyzer').use(new BundleAnalyzerPlugin()); //使用webpack-bundle-analyzer 生成报表
  },
  devServer: {
    port: 6845,
    // 反向代理（测试环境）
    proxy: {
      '/vue-mall-api': {
        target: 'http://119.29.165.98:5000/',
        changeOrigin: true,
        pathRewrite: {
          '^/vue-mall-api': '',
        },
      },
    },
  },
};
