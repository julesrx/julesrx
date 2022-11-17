export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['@fontsource/inter', '@unocss/reset/tailwind.css', '@/assets/main.scss'],
  typescript: { typeCheck: true, strict: true }
});
