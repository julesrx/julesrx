import './style.css';
import Bouncer from 'bouncing-element';

const random = max => Math.floor(Math.random() * max) + 1;

new Bouncer({
  frameTransformers: [
    {
      key: 'hue',
      initialValue: random(360),
      tranformer: (el, value) => {
        el.element.style.color = `hsl(${value.hue}, 100%, 50%)`;
        return value == 360 ? 0 : value + 1;
      }
    },
    {
      key: 'rotate',
      initialValue: random(360),
      tranformer: (el, value) => {
        el.element.style.color = `rotate(${value * el.direction}deg)`;
        return value == 360 ? 0 : value + 1;
      }
    }
  ]
});
