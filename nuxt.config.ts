import tailwindcss from '@tailwindcss/vite';

const title = 'Jules Raffoux · Tech lead';
const description =
  'Tech lead based in Bordeaux, working with .NET, Vue, Typescript, Go and other recent stuff.';
const url = 'https://julesrx.fr/';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-06',
  modules: ['@nuxt/content', '@nuxt/image', '@vueuse/nuxt'],
  image: { domains: ['avatars.githubusercontent.com'] },
  css: [
    '@fontsource-variable/rubik/index.css',
    '@fontsource-variable/jetbrains-mono/index.css',
    '~/assets/main.css'
  ],
  vite: { plugins: [tailwindcss()] },
  content: { renderer: { anchorLinks: false } },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'title', content: title },
        { name: 'description', content: description },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2ecc71' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },

        // Twitter
        { name: 'twitter:card', content: 'summary' },
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
