const fs = require('fs');
const { marked } = require('marked');

fs.readFile('./README.md', (_, readme) => {
  fs.readFile('./index.html', (_, f) => {
    const html = f.toString();
    const render = marked.parse(readme.toString());

    fs.writeFile('./dist/index.html', html.replace('{{readme}}', render), () => {});
  });
});
