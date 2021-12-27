module.exports = {
  publicPath: '/',
  devServer: {
    port: 9000,
    open: true,
    proxy: {
      '^/api': {
        target: 'https://api-v2.chuangkit.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ''
        }
      },
      '^/details': {
        target: 'https://api.chuangkit.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/details": ''
        }
      }
    }
  }
}