import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
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
        }
      }
    }
  },
  plugins: [typography()]
});
