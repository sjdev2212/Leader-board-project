import './style.css';
import inputScores from './inputScore.js';
import { getScores } from './apiMethods.js';

const apiId = 'TyBBHuPCY3ocPCrEApVV';

inputScores();

const refresBtn = document.getElementById('refresh');

const populateList = (list) => {
  const info = document.getElementById('scores');
  info.innerHTML = '';
  list.forEach((item) => {
    const newElement = document.createElement('li');
    newElement.classList = 'item-list';
    newElement.innerHTML = `${item.user}: ${item.score}`;

    info.appendChild(newElement);
  });
};
document.addEventListener('DOMContentLoaded', () => {
  getScores(apiId).then((scores) => {
    populateList(scores.result);
  });
});

refresBtn.addEventListener('click', () => {
  getScores(apiId).then((scores) => {
    populateList(scores.result);
  });
});
