const burgerMenu = document.querySelector('.burger-menu');
const burgerList = document.querySelector('.burger-list');
// const modal = document.querySelector('.modal');
const headerBar = document.querySelector('.header-bar');

function menuToggle1() {
  console.log(burgerMenu.classList);
  burgerMenu.classList.toggle('active');
  burgerMenu.classList.toggle('inactive');
  headerBar.classList.toggle('change');
}

