const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const index = path.join(__dirname, 'dist', 'index.html');

fs.readFile('./README.md', (_, readme) => {
  fs.readFile(index, (_, f) => {
    const html = f.toString();

    marked.use({
      renderer: {
        link: function () {
          const link = marked.Renderer.prototype.link.apply(this, arguments);
          return link.replace('<a', '<a rel="noopener noreferrer"');
        }
      }
    });

    fs.writeFile(index, html.replace('{{readme}}', marked.parse(readme.toString())), () => {});
  });
});
