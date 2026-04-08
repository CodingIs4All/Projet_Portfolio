/*
  RÉFÉRENCES:
    https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    https://www.youtube.com/watch?v=OtLb_YdBm3w
    https://www.youtube.com/watch?v=7D01ysb4dmA&t=1689s
*/

// SÉLECTION DES ÉLÉMENTS DU DOM
const toggle    = document.getElementById('menuToggle');
const nav       = document.getElementById('navMobile');
const header    = document.querySelector('.header');
const fermerBtn = document.getElementById('navFermer');

// OUVRE LE MENU MOBILE
function ouvrirMenu() {
  nav.classList.add('nav-ouverte');
  header.classList.add('header-menu-ouvert');
  toggle.setAttribute('aria-expanded', 'true');
}

// FERME LE MENU MOBILE
function fermerMenu() {
  nav.classList.remove('nav-ouverte');
  header.classList.remove('header-menu-ouvert');
  toggle.setAttribute('aria-expanded', 'false');
}

// BASCULE ENTRE OUVERT ET FERMÉ AU CLIC DU BOUTON HAMBURGER
toggle.addEventListener('click', () => {
  nav.classList.contains('nav-ouverte') ? fermerMenu() : ouvrirMenu();
});

// FERME LE MENU AU CLIC DU BOUTON X
fermerBtn.addEventListener('click', fermerMenu);

// FERME LE MENU AU CLIC D'UN LIEN DE NAVIGATION
nav.querySelectorAll('.nav-lien').forEach(lien => {
  lien.addEventListener('click', fermerMenu);
});