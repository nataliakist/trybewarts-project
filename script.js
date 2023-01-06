const button = document.querySelector('#access-button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const characCounter = document.querySelector('#counter');
const mainForm = document.querySelector('#main-form');
const newPage = document.querySelector('#form-data');
const userName = document.querySelector('#fullname');
const userEmail = document.querySelector('#user-email');
const selHouse = document.querySelector('#selected-house');
const selFamily = document.querySelector('#selected-family');
const selSubjects = document.querySelector('#selected-subjects');
const userRate = document.querySelector('#rate');
const observations = document.querySelector('#observations');
characCounter.innerHTML = 500;

function login() {
  button.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
login();

function charactersCounter(event) {
  const maxCharac = 500;
  const inputLength = textArea.value.length;
  characCounter.innerHTML = maxCharac - inputLength;
  if (inputLength >= maxCharac) {
    event.preventDefault();
  }
}

textArea.addEventListener('input', charactersCounter);

function checked() {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

agreement.addEventListener('click', checked);

function dataInfo() {
  const firstName = document.querySelector('#input-name');
  const lastName = document.querySelector('#input-lastname');
  const dataEmail = document.querySelector('#input-email');
  const house = document.querySelector('#house');
  const family = document.querySelector('input[name="family"]:checked');
  const obs = document.querySelector('#textarea');
  const evaluation = document.querySelector('input[name="rate"]:checked');
  const subs = document.querySelectorAll('.subject:checked');
  return (
    { firstName, lastName, dataEmail, house, obs, family, evaluation, subs }
  );
}

function newInfo(event) {
  event.preventDefault();
  mainForm.className = '';
  mainForm.style.display = 'none';
  newPage.style.display = 'block';
  const data = dataInfo();
  userName.innerHTML = `Nome: ${data.firstName.value} ${data.lastName.value}`;
  userEmail.innerHTML = `Email: ${data.dataEmail.value}`;
  selHouse.innerHTML = `Casa: ${data.house.value}`;
  selFamily.innerHTML = `Família: ${data.family.value}`;
  userRate.innerText = `Avaliação: ${data.evaluation.value}`;
  observations.innerHTML = `Observações: ${data.obs.value}`;
  let subjectList = [];
  data.subs.forEach((element) => subjectList.push(element.value));
  subjectList = subjectList.join(' ').replaceAll(' ', ', ');
  selSubjects.innerHTML = `Matérias: ${subjectList}`;
}

submitButton.addEventListener('click', newInfo);
