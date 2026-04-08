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

<script>
document.addEventListener("DOMContentLoaded", () => {

  const options = document.querySelectorAll(".lang-switch .option");
  const slider = document.querySelector(".switch-slider");

  console.log("options:", options.length); // debug

  options.forEach((opt, index) => {
    opt.addEventListener("click", () => {

      console.log("clicked", index); // debug

      options.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");

      slider.style.transform = index === 1 
        ? "translateX(100%)" 
        : "translateX(0)";
    });
  });

});
});

emailjs.sendForm(
  "service_ok7mjwa",
  "template_ytxahje",
  form,
  "--7zPpULQZbrfKkZn"
);

<script>
const modal = document.getElementById("cgv-modal");
const openBtn = document.getElementById("open-cgv");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", function(e) {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
</script>

<div style="max-width:700px; margin:40px auto; border-radius:16px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.5);">
  <iframe 
    src="assets/cgv1.pdf" 
    width="100%" 
    height="400px"
    style="border:none;">
  </iframe>
</div>
