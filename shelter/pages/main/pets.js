// --------загрузка карточек------------
"use strict";
let card;
let viewDone = {};
viewDone.view1 = 3;  //  size (window.innerwidth) > 1071 , 3,2,1 в зависимости от window.innerwidth
let oldSet = [0, 1, 2];
let newSet = [0, 1, 2];
import shelter from "../../assets/json/animal.js";
import afterLoad from "../main/popup.js";

let template = document.querySelector("#template");
// ----------
// const carouselLeft = document.querySelector(".carousel");
// --------

document.addEventListener("DOMContentLoaded", function () {
  addSet();
  petPanel1('#item-left');
  addSet();
  petPanel2('#item-active');
  addSet();
  petPanel3('#item-right');
  changeSlider();
});


window.onresize = function (event) {
  changeSlider();
};

const sizePage = document.querySelector("section.pets .page");
const carouselSize = document.querySelector(".carousel");
function changeSlider() {
  let size = sizePage.clientWidth;
  carouselSize.style.left = `-${size}px`;
  if (size > 1071) {
    viewDone.view1 = 3;
  } else if (size < 1071 && size > 601) {
    viewDone.view1 = 2;
  } else if (size < 601) {
    viewDone.view1 = 1;
  }
}

// -----------------------------------
function petPanel1(item) {
  let elems = document.querySelectorAll("#item-left .card");
  for (let elem of elems) {
    elem.remove();
  }
  for (let i = 0; i < 3; i++) {
    loadContent(item);
    card = document.querySelectorAll("#item-left .card");
    // console.log(' card= ', card);
    let k = +newSet[i];
    card[i].dataset.pet = shelter[k].name;
    card[i].dataset.id = shelter[k].id;
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[k].img);
    petImg[i].setAttribute("alt", shelter[k].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[k].name;
    // card[i].classList.add("animate");
  }
  afterLoad();
}

function petPanel2(item) {

  for (let i = 0; i < 3; i++) {
    loadContent(item);
    card = document.querySelectorAll("#item-active .card");
    let k = +newSet[i];
    card[i].dataset.pet = shelter[k].name;
    card[i].dataset.id = shelter[k].id;
    // card[i].classList.add("animate");
    let petImg = document.querySelectorAll("#item-active .pet-img");
    petImg[i].setAttribute("src", shelter[k].img);
    petImg[i].setAttribute("alt", shelter[k].name);
    let petsName = document.querySelectorAll("#item-active .pets-name");
    petsName[i].textContent = shelter[k].name;
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
    let k = +newSet[i];
    card[i].dataset.pet = shelter[k].name;
    card[i].dataset.id = shelter[k].id;
    // card[i].classList.add("animate");
    let petImg = document.querySelectorAll("#item-right .pet-img");
    petImg[i].setAttribute("src", shelter[k].img);
    petImg[i].setAttribute("alt", shelter[k].name);
    let petsName = document.querySelectorAll("#item-right .pets-name");
    petsName[i].textContent = shelter[k].name;
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
  switch (viewDone.view1) {
    case (3):
      carousel.classList.add("move-right");
      break;
    case (2):
      carousel.classList.add("move-right2");
      break;
    case (1):
      carousel.classList.add("move-right3");
      break;
  }

  btnRight.removeEventListener("click", moveRight);
  btnLeft.removeEventListener("click", moveLeft);
}

function moveLeft() {

  switch (viewDone.view1) {
    case (3):
      carousel.classList.add("move-left");
      break;
    case (2):
      carousel.classList.add("move-left2");
      break;
    case (1):
      carousel.classList.add("move-left3")
      break;
  }

  btnRight.removeEventListener("click", moveRight);
  btnLeft.removeEventListener("click", moveLeft);
}


carousel.addEventListener("animationend", (animationEvent) => {
  // console.log('animationEvent = ', animationEvent);
  carousel.classList.remove("move-left");
  carousel.classList.remove("move-left2");
  carousel.classList.remove("move-left3");
  carousel.classList.remove("move-right");
  carousel.classList.remove("move-right2");
  carousel.classList.remove("move-right3");
  if (animationEvent.animationName == "go-left" || animationEvent.animationName == "go-left2" || animationEvent.animationName == "go-left3") {
    itemRight.innerHTML = itemActive.innerHTML;
    itemActive.innerHTML = itemLeft.innerHTML;

    addSet();
    petPanel1('#item-left');
    newHanler();

  } else {
    itemLeft.innerHTML = itemActive.innerHTML;
    itemActive.innerHTML = itemRight.innerHTML;
    addSet();
    petPanel3('#item-right');
    newHanler();
  }
  afterLoad();

  function newHanler() {
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);

  }
})


function addSet() {
  let nn;
  oldSet = [];
  newSet.forEach((item) => {
    oldSet.push(item);
  })
  let oldactiveSet = [];
  let activeSet = itemActive.querySelectorAll(".item .card");
  activeSet.forEach((card) => {
    // console.log(' card.dataset.id= ', card.dataset.id);
    oldactiveSet.push(+card.dataset.id);
  })
  newSet = [];
  for (let i = 0; i < 3; i++) {
    do {
      nn = Math.floor(Math.random() * 8);
    } while (oldactiveSet.includes(nn) || newSet.includes(nn))
    newSet.push(nn);
  }
  // console.log(' oldSet= ', oldSet);
  // console.log('oldactiveSet = ', oldactiveSet);
  // console.log('newSet = ', newSet);
}



