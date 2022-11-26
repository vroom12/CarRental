import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: 'localhost',
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      less: {
        // 定制antd主题
        modifyVars: {
          'primary-color': '#CCFFCC',
          'link-color': '#FFCCCC',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      },
    },
  },
});
