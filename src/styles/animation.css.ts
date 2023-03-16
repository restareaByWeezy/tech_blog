import { keyframes } from '@vanilla-extract/css';

export const animateGlow = keyframes({
  from: {
    backgroundPosition: '0% 50%',
  },
  to: {
    backgroundPosition: '200% 50%',
  },
});

//TEXT FADE IN
export const textFadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translate3d(0, -20px, 0)',
  },
  to: {
    opacity: 1,
    transform: 'translateZ(0)',
  },
});

//VIOLET NEON
export const violetNeon = keyframes({
  from: {
    textShadow:
      ' 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de',
  },
  to: {
    textShadow:
      ' 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de',
  },
});
