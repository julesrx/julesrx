import { defineConfig, presetTypography } from 'unocss';

export default defineConfig({
  theme: {
    fontFamily: { sans: ['Inter'] }
  },
  presets: [
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
