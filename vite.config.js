import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/wiihope/' : '/',
  build: {
    outDir: 'dist',
    minify: 'esbuild', // ✅ Mantiene velocidad
    target: 'es2020', // ✅ Reduce transpilación
    cssMinify: 'esbuild', // ✅ Más rápido que lightningcss
    sourcemap: false,
    reportCompressedSize: false, // ✅ Ahorra 0.3s en build
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: { main: resolve(__dirname, 'index.html') },
      output: {
        manualChunks: {
          vendor: ['jquery'],
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore']
        },
        compact: true, // ✅ Compacta output
        generatedCode: 'es2015' // ✅ Menos polyfills
      },
      plugins: [{
        name: 'minify-html',
        generateBundle(_, b) {
          for (const f in b) {
            if (f.endsWith('.html') && b[f].type === 'asset') {
              b[f].source = b[f].source
                .replace(/\n\s*/g, '')
                .replace(/>\s+</g, '><')
                .replace(/\s{2,}/g, ' ')
                .replace(/<!--.*?-->/g, '')
                .replace(/\s+(class|id|style|href|src|type|rel|name|content)=/g, ' $1=')
                .trim();
            }
          }
        }
      }]
    },
    modulePreload: { polyfill: false } // ✅ Ahorra 2KB
  },
  esbuild: {
    drop: ['console', 'debugger'], // ✅ Elimina consoles en build
    legalComments: 'none', // ✅ Sin comentarios de licencia
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  },
  publicDir: 'public',
  server: {
    host: true
  }
}));