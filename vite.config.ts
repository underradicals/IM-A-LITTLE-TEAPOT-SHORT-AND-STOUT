import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));


export default defineConfig({
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    host: '0.0.0.0',
    https: {
      key: resolve('D:\\certs\\cert.key'),
      cert: resolve('D:\\certs\\cert.crt')
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
