module.exports = {
  // 自动打开浏览器
  devServer: {
    port: 3333, // 端口
    open: true // 打开浏览器
  },
  css: {
    // 配置css
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
