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
            }
          }
        }
      }
    }
  },
  plugins: [typography()]
});
