import fs from 'fs';
import { marked } from 'marked';

export default defineEventHandler(() => {
  const readme = fs.readFileSync('./README.md');

  marked.use({
    renderer: {
      link: function () {
        const link = marked.Renderer.prototype.link.apply(this, arguments);
        return link.replace('<a', '<a rel="noopener noreferrer"');
      }
    }
  });

  return marked.parse(readme.toString());
});
