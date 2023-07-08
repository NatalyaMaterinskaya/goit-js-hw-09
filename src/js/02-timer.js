import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < defaultDate.getTime()) {
            alert('aaa');
            console.log(defaultDate.getTime());
    }

    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', { options });
const date = new Date();
console.log(date.getTime());