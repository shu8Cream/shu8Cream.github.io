// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://shu8Cream.github.io',
  base: '/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [expressiveCode({
      themes: ['dracula', 'github-light'], // ダークモードとライトモード用
      styleOverrides: {
        // 角丸の調整などもここでできます（お好みで）
        borderRadius: '0.5rem',
      }
    }),
  ],
  
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});