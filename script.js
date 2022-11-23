const button = document.querySelector('#access-button');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');

button.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
