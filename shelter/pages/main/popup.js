"use strict";
import shelter from "../../assets/json/animal.js";
console.log(' shelter= ', shelter);

// ------Popup ------
document.addEventListener("DOMContentLoaded", function () {
  afterLoad();
});

function afterLoad() {
  let card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
      // console.log(' card[i].dataset.pet = ', card[i].dataset.pet);
      showCard(card[i].dataset.pet);
    })
  }
}

const popup = document.querySelector(".popup");
const popupPet = document.querySelector(".popup-pet");
const popupBtn = document.querySelector(".button-close");
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

popupBtn.addEventListener('click', (event) => {
  popupClose();
});

function popupClose() {
  popup.style.display = "none";
  modal.style.display = "none";
  body.style.overflow = 'auto';
}

function popupOpen() {
  popup.style.display = "flex";
  modal.style.display = "block";
  body.style.overflow = 'hidden';

  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const popupHeight = popupPet.offsetHeight;
  const popupWidth = popupPet.offsetWidth;
  let topPopup = windowHeight / 2 - popupHeight / 2;
  let leftPopup = windowWidth / 2 - popupWidth / 2;

  popup.style.top = topPopup.toString() + 'px';
  popup.style.left = leftPopup.toString() + 'px';
}

function showCard(petName) {
  // -----цикл по значению -----
  for (let item of shelter) {
    if (item.name == petName) {
      popupOpen();
      // console.log('item.name = ', item.name, item.type, item.description);
      const popupImg = document.querySelector(".popup-img");
      popupImg.style.backgroundImage = `url(${item.img})`;
      const popupHead = document.querySelector(".popup-head");
      popupHead.textContent = item.name;
      const popupHeadH4 = document.querySelector(".popup-txt div h4");
      popupHeadH4.textContent = item.type + ' - ' + item.breed;
      const popupHeadP = document.querySelector(".popup-txt div p");
      popupHeadP.textContent = item.description;

      const popupList1 = document.querySelector(".popup-list li:first-child span");
      popupList1.innerHTML = `<b>Age:</b> ${item.age}`;
      const popupList2 = document.querySelector(".popup-list li:nth-child(2) span");
      popupList2.innerHTML = `<b>Inoculations:</b> ${item.inoculations}`;

      const popupList3 = document.querySelector(".popup-list li:nth-child(3) span");
      popupList3.innerHTML = `<b>Diseases:</b> ${item.diseases}`;
      const popupList4 = document.querySelector(".popup-list li:last-child span");
      popupList4.innerHTML = `<b>Parasites:</b> ${item.parasites}`;
    }
  }
}

window.onclick = function (event) {
  // console.log('event.target = ', event.target);
  if (event.target == modal) {
    popupClose();
  }
}
// -----------------popup--------------------
export default afterLoad;