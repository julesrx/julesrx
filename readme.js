const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const index = path.join(__dirname, 'dist', 'index.html');

fs.readFile('./README.md', (_, readme) => {
  fs.readFile(index, (_, f) => {
    const html = f.toString();
    const render = marked.parse(readme.toString());

    fs.writeFile(index, html.replace('{{readme}}', render), () => {});
  });
});
