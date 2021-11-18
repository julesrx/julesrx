import './style.css';

const svg = document.getElementsByTagName('svg')[0];

let x, y;
let xspeed, yspeed;

let width = window.innerWidth;
let height = window.innerHeight;

const frame = () => {
  x = x + xspeed;
  y = y + yspeed;

  svg.style.left = x + 'px';
  svg.style.top = y + 'px';

  if (x + svg.clientWidth >= width) {
    xspeed = -xspeed;
    x = width - svg.clientWidth;
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
  }

  if (y + svg.clientHeight >= height) {
    yspeed = -yspeed;
    y = height - svg.clientHeight;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
  }
};

const setup = () => {
  x = 0;
  y = 0;

  xspeed = 1;
  yspeed = 1;

  setInterval(frame, fps(120));
};

const fps = n => Math.floor((1 / n) * 1000);

setup();
