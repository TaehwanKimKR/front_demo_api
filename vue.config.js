module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        rewrite: (path)=>path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
}