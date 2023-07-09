import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer');
const timerArrOfValues = [...timerEl.children].map(item => item.firstElementChild);

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
    let timeDifference = chosenDay - new Date().getTime();
    if (timeDifference > 0) {
      let  convertedTime = convertMs(timeDifference);
      setTimer(timerArrOfValues, convertedTime);
    }
    else {
      clearInterval(timerId);
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
      arr[i].textContent =  addLeadingZero(time.days.toString());
      continue;
    }
    if (arr[i].hasAttribute('data-hours')) {
      arr[i].textContent = addLeadingZero(time.hours.toString());
      continue;
    }
    if (arr[i].hasAttribute('data-minutes')) {
      arr[i].textContent = addLeadingZero(time.minutes.toString());
      continue;
    }
    if (arr[i].hasAttribute('data-seconds')) {
      arr[i].textContent = addLeadingZero(time.seconds.toString());
      continue;
    }
  }
}

function addLeadingZero(value){
  if (value.length < 2) {
    value = value.padStart(2, '0');
  } 
    return value;
}