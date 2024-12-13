import { defineConfig } from "umi";

export default defineConfig({
  title: 'XChat',
  routes: [
    { path: "/", component: "other" },
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:3000/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  npmClient: 'npm',
});
