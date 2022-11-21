const button = document.querySelector("#access-button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

button.addEventListener('click', () => {
  if(email.value === "tryber@teste.com" && password.value === "123456"){
    alert("Olá, Tryber!");
  } else {
    alert ("Email ou senha inválidos.")
  }
});