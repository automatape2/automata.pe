// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  image: {
    // Enable image optimization with Sharp
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Inline CSS smaller than 4KB to prevent render blocking
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      // Minify CSS aggressively
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          // Better chunking strategy
          manualChunks: undefined,
          // Inline small assets
          inlineDynamicImports: false,
        }
      }
    }
  }
});