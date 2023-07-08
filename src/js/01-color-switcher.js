const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  timerId = setInterval(() => {
    const currentColor = getRandomHexColor();
    bodyEl.style.backgroundColor = currentColor;
  }, 1000);
  btnStartEl.setAttribute('disabled', 'true');
  btnStopEl.removeAttribute('disabled');
}

function stopChangeColor() {
  clearInterval(timerId);
  btnStartEl.removeAttribute('disabled');
  btnStopEl.setAttribute('disabled', 'true');
}

btnStopEl.setAttribute('disabled', 'true');

btnStartEl.addEventListener('click', changeColor);
btnStopEl.addEventListener('click', stopChangeColor);
