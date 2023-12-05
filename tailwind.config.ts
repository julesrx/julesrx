import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

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
    theme: {
        extend: {
            colors: {
                primary: '#2ecc71',
                secondary: 'hsla(215,8%,47%,.4)',
                white: '#c9d1d9',
                background: '#0d1117'
            },
            fontFamily: {
                sans: ['"Rubik Variable"', ...defaultTheme.fontFamily.sans],
                mono: ['"JetBrains Mono Variable"', ...defaultTheme.fontFamily.mono]
            },
            typography: ({ theme }: { theme: (val: string) => string }) => ({
                gray: {
                    css: {
                        '--tw-prose-invert-body': theme('colors.white')
                    }
                }
            })
        }
    },
    plugins: [typography]
};

export default config;
