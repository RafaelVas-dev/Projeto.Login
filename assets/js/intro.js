// Seções Principais
const secaoIntro = document.querySelector('#intro');
const secaoLogin = document.querySelector('#login');
// Videos
const introVideo = document.querySelector('#intro-video');
const loginVideo = document.querySelector('#login-video');
// Elementos
const tituloIntro = document.querySelector('#titulo-intro');
const paragrafoIntro = document.querySelector('#paragrafo-intro');

// Var Cont
let introFinalizada = false; // controla se a animação da intro já foi feita
let loginVisivel = false;    // controla se o card de login está na tela




// 1. Inicialização
window.onload = () => {
    mostrarIntro();
};

function mostrarIntro(){
    introVideo.addEventListener('loadeddata', () => {
        tituloIntro.classList.add('animar-titulo');
        paragrafoIntro.classList.add('animar-paragrafo');
    });
}