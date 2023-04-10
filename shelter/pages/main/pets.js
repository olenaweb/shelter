// --------загрузка карточек------------
"use strict";
let card;
import shelter from "../../assets/json/animal.js";
import afterLoad from "../main/popup.js";

let template = document.querySelector("#template");


document.addEventListener("DOMContentLoaded", function () {
  console.log(' DOMContentLoaded ');
  petPanel1('#item-left');
  petPanel2('#item-active');
  petPanel3('#item-right');
});


function petPanel1(item) {
  let elems = document.querySelectorAll("#item-left .card");
  for (let elem of elems) {
    elem.remove();
  }
  // itemCarousel.innerHTML = '';
  // console.log('shelter = ', shelter);
  for (let i = 0; i < 3; i++) {
    loadContent(item);
    card = document.querySelectorAll("#item-left .card");
    // console.log(' card= ', card);

    card[i].dataset.pet = shelter[i].name;
    card[i].dataset.id = shelter[i].id;
    // card[i].classList.add("animate");
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[i].img);
    petImg[i].setAttribute("alt", shelter[i].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[i].name;
  }
  afterLoad();
}

function petPanel2(item) {
  for (let i = 0; i < 3; i++) {
    loadContent(item);
    card = document.querySelectorAll("#item-active .card");
    // console.log(' card= ', card);
    // console.log(' shelter[i]= ', shelter[i]);
    card[i].dataset.pet = shelter[i + 3].name;
    card[i].dataset.id = shelter[i + 3].id;
    // card[i].classList.add("animate");
    let petImg = document.querySelectorAll("#item-active .pet-img");
    petImg[i].setAttribute("src", shelter[i + 3].img);
    petImg[i].setAttribute("alt", shelter[i + 3].name);
    let petsName = document.querySelectorAll("#item-active .pets-name");
    petsName[i].textContent = shelter[i + 3].name;
  }
  afterLoad();
}

function petPanel3(item) {
  let elems = document.querySelectorAll("#item-right .card");
  for (let elem of elems) {
    elem.remove();
  }

  for (let i = 0; i < 3; i++) {
    loadContent(item);
    card = document.querySelectorAll("#item-right .card");
    // console.log(' card= ', card);

    card[i].dataset.pet = shelter[i + 5].name;
    card[i].dataset.id = shelter[i + 5].id;
    // card[i].classList.add("animate");
    let petImg = document.querySelectorAll("#item-right .pet-img");
    petImg[i].setAttribute("src", shelter[i + 5].img);
    petImg[i].setAttribute("alt", shelter[i + 5].name);
    let petsName = document.querySelectorAll("#item-right .pets-name");
    petsName[i].textContent = shelter[i + 5].name;
  }
  afterLoad();
}


function loadContent(item) {
  let templateClone = template.content.cloneNode(true);
  if (item == '#item-left') {
    let itemCarousel = document.querySelector("#item-left .content");
    itemCarousel.append(templateClone);
  } else if (item == '#item-active') {
    let itemCarousel = document.querySelector("#item-active .content");
    itemCarousel.append(templateClone);
  } else if (item == '#item-right') {
    let itemCarousel = document.querySelector("#item-right .content");
    itemCarousel.append(templateClone);
  }
}

// --------------Carousel--------------

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector(".button-right");
const carousel = document.querySelector("#carousel");
const itemLeft = document.querySelector("#item-left");
const itemRight = document.querySelector("#item-right");
const itemActive = document.querySelector("#item-active")

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);


function moveRight() {
  carousel.classList.add("move-right");
  btnRight.removeEventListener("click", moveRight);
  btnLeft.removeEventListener("click", moveLeft);
}

function moveLeft() {
  carousel.classList.add("move-left");
  btnRight.removeEventListener("click", moveRight);
  btnLeft.removeEventListener("click", moveLeft);
}


carousel.addEventListener("animationend", (animationEvent) => {
  // console.log('animationEvent = ', animationEvent);
  if (animationEvent.animationName == "go-left") {
    carousel.classList.remove("move-left");
    itemActive.innerHTML = itemLeft.innerHTML;
    newContent();
    petPanel1('#item-left');

  } else {
    carousel.classList.remove("move-right");
    itemActive.innerHTML = itemRight.innerHTML;
    newContent();
    petPanel3('#item-right');
  }
  afterLoad();


  function newContent() {
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
  }
})
