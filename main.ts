import '@fontsource/inter';
import 'virtual:windi.css';
import './main.css';
import Bouncer from 'bouncing-element';

Array(3)
  .fill(['🐧', '🌱', '👨‍💻', '🎮', '🍝', '🌈', '📀', '🏍', '🐸', '🚀'])
  .flat()
  .map(e => {
    const i = document.createElement('i');
    i.className = 'bounce';
    i.innerHTML = e;
    return i;
  })
  .forEach(e => document.body.appendChild(e));

Array(3)
  .fill('/favicon.ico')
  .map(e => {
    const i = document.createElement('img');
    i.className = 'bounce';
    i.src = e;
    return i;
  })
  .forEach(e => document.body.appendChild(e));

new Bouncer();
