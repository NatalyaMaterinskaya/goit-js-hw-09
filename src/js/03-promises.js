const formEl = document.querySelector('.form');

const delayEl = formEl.elements.delay;
const stepEl = formEl.elements.step;
const amountOfPromiseEl = formEl.elements.amount;
const btnEl = formEl.lastElementChild;

btnEl.addEventListener('click', onStart);

function onStart(event) {
  event.preventDefault();
  const objForPromise = {
    position: null,
    delay: Number(delayEl.value),
  };
  const amountOfPromise = Number(amountOfPromiseEl.value);
  const step = Number(stepEl.value);
  addPromise(objForPromise, amountOfPromise, step);
}

function addPromise({ position, delay }, amountOfPromise, step) {
  for (let i = 1; i <= amountOfPromise; i += 1) {
    position=i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({position, delay });
      } else {
        rej({ position, delay });
      }
    },delay)
  });
}
