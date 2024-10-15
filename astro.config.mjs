import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; 
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({

  integrations: [vue({
    ssr: true
  })],
  output: "server",
  adapter: vercel(),

});