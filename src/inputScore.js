import { postScores } from './apiMethods.js';

const inputScores = () => {
  const apiId = 'TyBBHuPCY3ocPCrEApVV';
  const inputScores = document.getElementById('add-score');
  const addScores = document.createElement('div');
  const inputTitle = document.createElement('h2');
  inputTitle.innerText = 'Add your score';
  const form = document.createElement('form');
  form.classList = 'form';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'your name';
  nameInput.classList = 'name';
  const scoreInput = document.createElement('input');
  scoreInput.type = 'number';
  scoreInput.classList = 'number';
  scoreInput.placeholder = 'your score';
  scoreInput.setAttribute('required', '');
  const scoreButton = document.createElement('button');
  scoreButton.innerText = 'submit';
  scoreButton.type = 'submit';
  scoreButton.classList = 'submit-btn';

  form.append(nameInput, scoreInput, scoreButton);
  addScores.append(inputTitle, form);
  inputScores.appendChild(addScores);
  scoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    const body = {
      user: nameInput.value,
      score: parseInt(scoreInput.value, 10),

    };
    const allScores = document.getElementById('scores');
    allScores.innerHTML += `
    <ul class="inside">
    <li>${nameInput.value}  :  ${scoreInput.value}

    </li> 
 </ul>

    `;
    postScores(apiId, body);

    nameInput.value = '';
    scoreInput.value = '';
  });
};

export default inputScores;
