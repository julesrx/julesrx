import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import { theme } from '@julesrx/utils';

import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.ts'
  ],
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        primary: theme.primary,
        secondary: 'hsla(215,8%,47%,.4)',
        white: theme.body,
        background: theme.background
      },
      fontFamily: {
        sans: ['"Rubik Variable"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono Variable"', ...defaultTheme.fontFamily.mono]
      },
      fontWeight: { inherit: 'inherit' },
      keyframes: {
        'fade-in': {
          from: { opacity: '0%' },
          to: { opacity: '100%' }
        }
      },
      animation: { 'fade-in': 'fade-in 1s linear 1' },
      typography: ({ theme }: { theme: (val: string) => string }) => ({
        gray: {
          css: {
            '--tw-prose-invert-body': theme('colors.white')
          }
        }
      })
    }
  }
};

export default config;
