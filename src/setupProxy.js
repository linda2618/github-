//代理跨域请求
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
