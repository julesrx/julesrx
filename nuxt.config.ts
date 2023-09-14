const title = 'Jules Raffoux';
const description =
  "I'm Jules, a full stack developer at bewease in Bordeaux, France 🇫🇷, working with Vue, Typescript, .NET and other recent stuff.";
const url = 'https://julesrx.fr/';

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/image'],
  css: ['@fontsource/inter', 'chota/dist/chota.min.css', '@/assets/main.scss'],
  typescript: { typeCheck: true, strict: true },
  appConfig: { title },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'title', content: title },
        { name: 'description', content: 'config.description' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2ecc71' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },

        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@julesrafx' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: url + 'summary.png' },

        // Open Graph / Facebook
        { name: 'og:title', content: title },
        { name: 'og:type', content: 'website' },
        { name: 'og:image', content: url + 'summary.png' },
        { name: 'og:url', content: url },
        { name: 'og:description', content: description },
        { name: 'og:locale', content: 'en_GB' }
      ],
      link: [
        { rel: 'canonical', href: url },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
});
