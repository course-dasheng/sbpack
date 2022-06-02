import moment from 'moment';
import './style.css';

// Write TypeScript code!
document.getElementById('time').innerHTML = moment().format(
  'MMMM Do YYYY, h:mm:ss a'
);
