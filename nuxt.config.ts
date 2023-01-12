export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt'],
  css: ['@fontsource/inter', '@unocss/reset/tailwind.css', '@/assets/main.scss'],
  typescript: { typeCheck: true, strict: true },
  appConfig: {
    url: 'https://julesrx.fr/',
    title: 'Jules Raffoux',
    description:
      "I'm Jules, a full stack developer at bewease in Bordeaux, France 🇫🇷, working with Vue, Typescript, .NET and other recent stuff."
  }
});
