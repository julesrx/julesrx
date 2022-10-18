import fs from 'fs';
import path from 'path';
import { createUnplugin } from 'unplugin';
import { marked } from 'marked';

export default createUnplugin(() => {
  return {
    name: 'html-replace',
    vite: {
      transformIndexHtml: {
        enforce: 'pre',
        transform: html => {
          const readme = fs.readFileSync(path.join(__dirname, 'README.md'));

          marked.use({
            renderer: {
              link: function () {
                const link = marked.Renderer.prototype.link.apply(this, arguments);
                return link.replace('<a', '<a rel="noopener noreferrer"');
              }
            }
          });

          return html
            .replace('{{ readme }}', marked.parse(readme.toString()))
            .replace(
              /{{ description }}/gm,
              "I'm a full stack dev at bewease in Bordeaux, France 🇫🇷, working with Vue, Typescript, .NET and other recent stuff."
            )
            .replace(/{{ title }}/gm, 'Jules Raffoux');
        }
      }
    }
  };
}).vite;
