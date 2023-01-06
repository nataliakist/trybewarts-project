const button = document.querySelector('#access-button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textArea = document.querySelector('#textarea');
const characCounter = document.querySelector('#counter');
characCounter.innerHTML = 500;

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const charactersCounter = (e) => {
  const maxCharac = 500;
  const inputLength = textArea.value.length;
  characCounter.innerHTML = maxCharac - inputLength;
  if (inputLength >= maxCharac) {
    e.preventDefault();
  }
};

textArea.addEventListener('input', charactersCounter);

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
