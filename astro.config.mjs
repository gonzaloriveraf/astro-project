import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone', // Modo recomendado para Render
    host: '0.0.0.0', // Esto es importante
    port: process.env.PORT || 3000 // Usar variable de entorno PORT
  }),
  integrations: [vue({
    ssr: true
  })]
});