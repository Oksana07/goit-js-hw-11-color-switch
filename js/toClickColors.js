import { colors } from './main-colors.js';


const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.body,
};

const DELAY = 1000;
let timerId = null;


refs.btnStart.addEventListener('click', toClickStartColors);
refs.btnStop.addEventListener('click', onClickStopColors);


  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

 function toClickStartColors() {
   
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.btnStop.classList.add('btnStop');
    refs.btnStart.classList.remove('btnStart');
}, DELAY);

    refs.btnStart.disabled = true;
};

function onClickStopColors() {
  refs.btnStart.classList.add('btnStart');
  refs.btnStop.classList.remove('btnStop');
 clearInterval(timerId);
 refs.btnStart.disabled = false;
};