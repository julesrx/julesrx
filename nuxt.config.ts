export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['@fontsource/inter', '@/assets/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
});
