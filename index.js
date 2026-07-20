const firstCard = document.querySelector (".product-cards");
const colorButton = document.querySelector (".btn-color");
colorButton.addEventListener ("click", function() {
  firstCard.style.backgroundColor = "#a3d2ca";
  console.log("Кнопка нажата!");
})

const allCards = document.querySelectorAll (".product-cards");
const colorButtonAll = document.querySelector (".btn-color-all");
colorButtonAll.addEventListener ("click", function() {
  allCards.forEach (function(card) {
    card.style.backgroundColor = "lightcoral";
  });
});
function askAndOpenGoogle() {
const userAnswer = confirm ("Вы точно хотите уйти на сайт Google?");
if (userAnswer === true) {
  window.open('https://www.google.com');
  } else {
    console.log('Пользователь остался на странице.');
  }
}
const googleButton = document.querySelector('.btn-google');
googleButton.addEventListener('click', askAndOpenGoogle);

function printAndAlert(text) {
  console.log(text); 
  alert(text); 
}
const messageButton = document.querySelector('.btn-message');
messageButton.addEventListener('click', function() {
  printAndAlert('Привет! Я универсальная функция!');
});

const pageTitle = document.querySelector (".title");
pageTitle.addEventListener ("mouseover", function(event) {
  console.log(event.target.textContent);
});
const toggleButton = document.querySelector('.btn-toggle');
toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('active-color');
});
