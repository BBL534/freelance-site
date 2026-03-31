// Navbar sticky au scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});
// Navbar change au scroll
window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "white";
}
else{
navbar.style.background = "transparent";
}

});
window.addEventListener("scroll", function(){

const navbar = document.querySelector(".navbar");

if(window.scrollY > 50){
navbar.style.background = "white";
}

});
const langSwitch = document.getElementById('lang-switch');
let currentLang = 'en';

langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    langSwitch.textContent = currentLang === 'en' ? 'FR' : 'EN';

    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = currentLang === 'en' ? el.dataset.en : el.dataset.fr;
    });
});
// LANG SWITCH

// LANGUAGE SWITCH — GLOBAL
const btn = document.getElementById('lang-switch');

btn.addEventListener('click', () => {
  const isFrench = document.documentElement.lang === 'fr';

  // Toggle lang attribute
  document.documentElement.lang = isFrench ? 'en' : 'fr';

  // Toggle visible content
  document.querySelectorAll('.lang').forEach(el => {
    el.classList.remove('active');
  });

  document.querySelectorAll('.lang.' + (isFrench ? 'en' : 'fr'))
    .forEach(el => el.classList.add('active'));

  // Update button label
  btn.textContent = isFrench ? 'FR' : 'EN';
});

// Sélection des éléments
const langBtn = document.getElementById('lang-switch');
const frContent = document.querySelector('.lang.fr');
const enContent = document.querySelector('.lang.en');

// Fonction de bascule
langBtn.addEventListener('click', () => {
  if(langBtn.textContent === "FR"){
    langBtn.textContent = "EN";
    frContent.classList.remove('active');
    enContent.classList.add('active');
  } else {
    langBtn.textContent = "FR";
    frContent.classList.add('active');
    enContent.classList.remove('active');
  }
});