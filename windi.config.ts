import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: { h1: { color: '#2ecc71' } }
        }
      }
    }
  },
  plugins: [typography]
});
