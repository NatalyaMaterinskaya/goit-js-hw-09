const formEl = document.querySelector('.form');

const delayEl = formEl.elements.delay;
const stepEl = formEl.elements.step;
const amountOfPromiseEl = formEl.elements.amount;
const btnEl = formEl.lastElementChild;


btnEl.addEventListener('click', onStart);

function onStart(event) {
  event.preventDefault();
  const objForPromise = {
    position: amountOfPromiseEl.value,
    delay: delayEl.value,
  };
  const step = stepEl.value;
  console.log(step);
  addPromise(objForPromise, step);
}

function addPromise({ position, delay }, step) {
  let numDelay = Number(delay);
  for (let i = 0; i < position; i += 1) {
    setTimeout(() => {
      console.log(numDelay);
      createPromise(position, delay)
        .then((position, delay) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch((position, delay) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, numDelay);
    //numDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res(position, delay);
    } else {
      rej(position, delay);
    }
  });
}
