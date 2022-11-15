import { defineConfig, presetUno, presetTypography } from 'unocss';

export default defineConfig({
  theme: {
    fontFamily: { sans: ['Inter'] }
  },
  shortcuts: { bounce: 'h-6 w-6 opacity-20 sm:opacity-40 lg:opacity-100' },
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        h3: { color: 'inherit' },
        h4: { color: 'inherit' },
        a: {
          color: '#2ecc71',
          textDecoration: 'none'
        },
        code: {
          color: 'inherit',
          backgroundColor: 'rgba(110,118,129,0.4)',
          borderRadius: '6px',
          fontWeight: 'normal'
        },
        'code::before': { content: '' },
        'code::after': { content: '' }
      }
    })
  ]
});
