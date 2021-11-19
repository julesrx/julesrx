import './style.css';

let interval;

const icons = [];

let width;
let height;

const frame = () => {
  for (const icon of icons) {
    hue(icon);
    rotate(icon);

    icon.x = icon.x + icon.xspeed;
    icon.y = icon.y + icon.yspeed;

    icon.el.style.left = `${icon.x}px`;
    icon.el.style.top = `${icon.y}px`;

    if (icon.x + icon.el.clientWidth >= width) {
      icon.xspeed = -icon.xspeed;
      icon.x = width - icon.el.clientWidth;
    } else if (icon.x <= 0) {
      icon.xspeed = -icon.xspeed;
      icon.x = 0;
    }

    if (icon.y + icon.el.clientHeight >= height) {
      icon.yspeed = -icon.yspeed;
      icon.y = height - icon.el.clientHeight;
    } else if (icon.y <= 0) {
      icon.yspeed = -icon.yspeed;
      icon.y = 0;
    }
  }
};

const setup = () => {
  clearInterval(interval);

  width = window.innerWidth;
  height = window.innerHeight;

  for (const el of document.getElementsByTagName('a')) {
    icons.push({
      el,
      x: random(width),
      y: random(height),
      xspeed: random(2),
      yspeed: random(3),
      hue: random(360),
      rotate: random(360),
      dir: Math.random() > 0.5 ? 1 : -1
    });
  }

  interval = setInterval(frame, fps(120));
};

const hue = icon => {
  icon.hue = icon.hue == 360 ? 0 : icon.hue + 1;
  icon.el.style.color = `hsl(${icon.hue}, 100%, 50%)`;
};

const rotate = icon => {
  icon.rotate = icon.rotate == 360 ? 0 : icon.rotate + 1;
  icon.el.style.transform = `rotate(${icon.rotate * icon.dir}deg)`;
};

const random = max => Math.floor(Math.random() * max) + 1;
const fps = n => Math.floor((1 / n) * 1000);

setup();

window.addEventListener('resize', setup);
