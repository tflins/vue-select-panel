const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('example'))
      .set('~', path.resolve('packages'))

    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/example/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
