const burgerMenu = document.querySelector('.burger-menu');
const burgerList = document.querySelector('.burger-list');
const headerBar = document.querySelector('.header-bar');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

function menuToggle() {
  console.log(burgerMenu.classList);
  burgerMenu.classList.toggle('active');
  burgerMenu.classList.toggle('inactive');
  headerBar.classList.toggle('change');
  if (burgerMenu.classList.contains('active')) {
    modal.style.display = "block";
    body.style.overflow = 'hidden';
  } else {
    modal.style.display = "none";
    body.style.overflow = 'auto';
  }
}

burgerMenu.addEventListener('click', (event) => {
  // console.log('event.target = ', event.target);
  menuToggle();
});

window.onclick = function (event) {
  // console.log('event.target = ', event.target);
  if (event.target == modal) {
    menuToggle();
  }
}



