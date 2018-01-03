import styles from './style.scss';
import moment from 'moment';

var sec_pointer = document.getElementById("sec"),
    min_pointer = document.getElementById("min"),
    hour_pointer = document.getElementById("hour");

setInterval(function() {
  let hour = moment().format('hh'),
      minute = moment().format('mm'),
      second = moment().format('ss');

  let hourRotate = (hour*60)/2,
      minRotate = minute * 6,
      secondRotate = second * 6;

  sec_pointer.style.transform = 'rotate('+secondRotate+'deg)';
  min_pointer.style.transform = 'rotate('+minRotate+'deg)';
  hour_pointer.style.transform = 'rotate('+hourRotate+'deg)';

}, 1000);
