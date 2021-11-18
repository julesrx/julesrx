import './style.css';

const icons = [];

let xspeed, yspeed;

let width = window.innerWidth;
let height = window.innerHeight;

const frame = () => {
  for (let icon of icons) {
    icon.x = icon.x + xspeed;
    icon.y = icon.y + yspeed;

    icon.el.style.left = icon.x + 'px';
    icon.el.style.top = icon.y + 'px';

    if (icon.x + icon.el.clientWidth >= width) {
      xspeed = -xspeed;
      icon.x = width - icon.el.clientWidth;
    } else if (icon.x <= 0) {
      xspeed = -xspeed;
      icon.x = 0;
    }

    if (icon.y + icon.el.clientHeight >= height) {
      yspeed = -yspeed;
      icon.y = height -  icon.el.clientHeight;
    } else if (icon.y <= 0) {
      yspeed = -yspeed;
      icon.y = 0;
    }
  }
};

const setup = () => {
  for (const svg of document.getElementsByTagName('svg')) {
    icons.push({ el: svg, x: 0, y: 0 });
  }

  xspeed = 1;
  yspeed = 1;

  setInterval(frame, fps(120));
};

const fps = n => Math.floor((1 / n) * 1000);

setup();
