// @ts-check
import { defineConfig } from 'astro/config';
/* import svgr from 'vite-plugin-svgr' */
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  /* vite: {
    plugins: [svgr()],
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      }
    }
  } */
});