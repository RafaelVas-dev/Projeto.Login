// Seções Principais
const secaoIntro = document.querySelector('#intro');
const secaoLogin = document.querySelector('#login');
const inicioTxt = document.querySelector('.intro-text');
// Videos
const introVideo = document.querySelector('#intro-video');
const loginVideo = document.querySelector('#login-video');
// Audíos
const somIntro = document.getElementById('som-intro');
const somClique = document.getElementById('som-clique');

// Var Controle
let introFinalizada = false; // controla se a animação da intro já foi feita
let loginVisivel = false;    // controla se o card de login está na tela




// 1. Inicialização

// Reproduzir som de clique + iniciar som da intro ao clicar
document.addEventListener('click', () => {
    somClique.currentTime = 0;
    somClique.play();

    if(!introFinalizada){
        inicioTxt.classList.add('zoom-out');
        setTimeout(() => {
            secaoIntro.style.display = "none";
            secaoLogin.classList.add('mostrar-login');
            loginVisivel = true;
          }, 1000);
    }
  
    // Iniciar música de fundo se ainda não estiver tocando
    if (somIntro.paused) {
      somIntro.play();
    }
});

// 2. Card de Login
const form = document.querySelector('form');
const inputEmail = form.querySelector('input[name="email"]');
const inputSenha = form.querySelector('input[name="senha"]');
const botaoLogin = form.querySelector('.btn-login');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (checkInputs()) {
      alert('Login feito com sucesso!');
  }

});

inputEmail.addEventListener('input', () => {
  validateField(inputEmail, inputEmail.value.trim() !== '', 'Email inválido');
});

inputSenha.addEventListener('input', () => {
  validateField(inputSenha, inputSenha.value.trim() !== '', 'Senha invalida');
})

function validateField(input, condition, errorMenssage){
  
}
