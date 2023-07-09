import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
console.log(inputEl);
const btnStartEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const timerArrValue = [...timerEl.children].map(item => item.firstElementChild);

btnStartEl.setAttribute('disabled', 'true');

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      btnStartEl.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

btnStartEl.addEventListener('click', countdown);

function countdown() {
  const chosenDay = new Date(inputEl.value).getTime();
  timerId = setInterval(() => {
    let timeTo = chosenDay - new Date().getTime();
    if (timeTo > 0) {
      let convertTime = convertMs(timeTo);
      console.log(convertTime.days);
      setTimer(timerArrValue, convertTime);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function setTimer(arr, time) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasAttribute('data-days')) {
      arr[i].textContent = time.days;
    }
    if (arr[i].hasAttribute('data-hours')) {
      arr[i].textContent = time.hours;
    }
    if (arr[i].hasAttribute('data-minutes')) {
      arr[i].textContent = time.minutes;
    }
    if (arr[i].hasAttribute('data-seconds')) {
      arr[i].textContent = time.seconds;
    }
  }
}
