import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; 
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    mode: 'standalone' 
  }),
  output: "server",
  integrations: [vue({
    ssr: true
  })]
});