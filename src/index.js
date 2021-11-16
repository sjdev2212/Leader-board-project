import './style.css';
import inputScores from './inputScore.js';

inputScores();
const refresBtn = document.getElementById('refresh');
refresBtn.addEventListener('click', () => {
  const ul = document.querySelectorAll('.inside');
  ul.forEach((item) => {
    item.remove();
  });
});