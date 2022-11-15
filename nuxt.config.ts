export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['@/assets/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
});
