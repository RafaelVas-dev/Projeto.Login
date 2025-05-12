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
            alternarSecoes();
            secaoIntro.style.display = "none";
            secaoLogin.classList.add('mostrar-login');
            loginVisivel = true;
          }, 1000);
    }
    if (somIntro.paused) {
      somIntro.play();
    }
});

function alternarSecoes() {
  introVideo.pause();
  loginVideo.play();
}

// 2. Card de Login
const form = document.querySelector('form');
const inputEmail = form.querySelector('input[name="email"]');
const inputSenha = form.querySelector('input[name="senha"]');
const botaoLogin = form.querySelector('.btn-login');
const iconAberto = document.querySelector('.bi-eye');
const iconFechado = document.querySelector('.bi-eye-slash');

// Submissão do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (checkInputs()) {
    alert('Login bem-sucedido!');
    form.reset(); // limpa o formulário
    limparErros(); // remove mensagens de erro e bordas
  }
});

// Validação em tempo real
inputEmail.addEventListener('input', () => {
  validateField(inputEmail, inputEmail.value.trim() !== '', 'Email inválido');
});

inputSenha.addEventListener('input', () => {
  validateField(inputSenha, inputSenha.value.trim() !== '', 'Senha inválida');
});

function checkInputs() {
  const emailValido = inputEmail.value.trim() !== '';
  const senhaValida = inputSenha.value.trim() !== '';

  const emailOk = validateField(inputEmail, emailValido, 'Email inválido');
  const senhaOk = validateField(inputSenha, senhaValida, 'Senha inválida');

  return emailOk && senhaOk;
}

function validateField(input, condition, errorMessage) {
  const parent = input.parentElement;
  let errorElement = parent.querySelector('.error-message');

  // Cria o elemento se não existir
  if (!errorElement) {
    errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    parent.appendChild(errorElement);
  }

  if (!condition) {
    input.classList.add('erro');
    errorElement.textContent = errorMessage;
    return false;
  } else {
    input.classList.remove('erro');
    errorElement.textContent = '';
    return true;
  }
}

iconAberto.addEventListener('click', () =>{
  inputSenha.type = "text";
  iconAberto.style.display = 'none';
  iconFechado.style.display = 'block';
});

iconFechado.addEventListener('click', () =>{
  inputSenha.type = "password";
  iconAberto.style.display = 'block';
  iconFechado.style.display = 'none';
});

function limparErros() {
  const mensagensErro = document.querySelectorAll('.error-message');
  mensagensErro.forEach(el => el.remove());

  const camposErro = form.querySelectorAll('.erro');
  camposErro.forEach(el => el.classList.remove('erro'));
}
