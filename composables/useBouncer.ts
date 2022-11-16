import Bouncer from 'bouncing-element';

const emojis = ['🐧', '🌱', '👨‍💻', '🎮', '🍝', '🌈', '📀', '🏍', '🐸', '🚀'];

export default function () {
  onMounted(() => {
    Array(3)
      .fill(emojis)
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
  });

  onUnmounted(() => {
    for (const el of document.getElementsByClassName('bounce')) {
      el.remove();
    }
  });
}
