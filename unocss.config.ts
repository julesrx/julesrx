import { defineConfig, presetUno, presetTypography } from 'unocss';

const uno = presetUno();

export default defineConfig({
  theme: {
    fontFamily: {
      sans: ['Inter', uno.theme!.fontFamily!.sans]
    }
  },
  shortcuts: { bounce: 'h-6 w-6 opacity-20 sm:opacity-40 lg:opacity-100 rounded-full -z-1' },
  presets: [
    uno,
    presetTypography({
      cssExtend: {
        'h3>a': { color: 'inherit' },
        'h4>a': { color: 'inherit' },
        a: {
          color: '#2ecc71',
          'text-decoration': 'none'
        },
        code: {
          background: 'rgba(110,118,129,0.4) !important',
          'border-radius': '6px',
          'font-family': uno.theme!.fontFamily!.mono,
          'font-weight': 'normal'
        },
        img: {
          'max-width': '95vw',
          'margin-top': '2em',
          'margin-bottom': '2em'
        },
        ul: { 'margin-left': '40px' },
        li: {
          'padding-left': '.8em',
          margin: '.5em 0'
        }
      }
    })
  ]
});
