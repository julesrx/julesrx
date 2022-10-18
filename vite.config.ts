import { defineConfig } from 'vite';
import windicss from 'vite-plugin-windicss';
import htmlReplacePlugin from './html-replace-plugin';

export default defineConfig({
  plugins: [windicss(), htmlReplacePlugin()]
});
