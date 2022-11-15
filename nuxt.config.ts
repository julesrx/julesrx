export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
});
