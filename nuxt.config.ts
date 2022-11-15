export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['@fontsource/inter', '@unocss/reset/normalize.css', '@/assets/main.scss'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
});
