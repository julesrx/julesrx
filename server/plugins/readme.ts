import fs from 'fs';

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('content:file:beforeParse', file => {
    if (file._id.endsWith('index.md')) {
      const readme = fs.readFileSync('./README.md');
      file.body = readme.toString();
    }
  });
});
