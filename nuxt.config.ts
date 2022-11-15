export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
});
