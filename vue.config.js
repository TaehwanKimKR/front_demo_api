module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8082',
        rewrite: (path)=>path.replace(/^\/api/, ""),
        changeOrigin: true,
      },
    },
  },
}