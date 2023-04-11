// --------загрузка карточек------------
"use strict";
let card;
let oldSet = [0, 1, 2];
let oldSetRight = [0, 1, 2];
let oldSetLeft = [0, 1, 2];
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
});


// window.onresize = function (event) {
// };

// const sizePage = document.querySelector("section.pets .page");
// function changeSlider() {
//   let size = sizePage.innerWidth;
//   if (size > 1071) {

//   } else if (size < 1071 && size > 601) {

//   } else if (size < 601) {

//   }
// }

// -----------------------------------
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
    let k = +newSet[i];
    card[i].dataset.pet = shelter[k].name;
    card[i].dataset.id = shelter[k].id;
    // card[i].classList.add("animate");
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[k].img);
    petImg[i].setAttribute("alt", shelter[k].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[k].name;
  }
  afterLoad();
}

function petPanel2(item) {
  for (let i = 0; i < 3; i++) {
    loadContent(item);
    card = document.querySelectorAll("#item-active .card");
    // console.log(' card= ', card);
    let k = +newSet[i];
    // console.log(' shelter[i]= ', shelter[i]);
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
    // console.log(' card= ', card);
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
// window.onresize = function (event) {
//   loadPets();
// };

// function loadPets() {
//   let size = window.innerWidth;
//   if (size > 1071) {
//     viewDone.view1 = 1;
//     maxRange = 6;    // количество экранов пагинации
//   } else if (size < 1071 && size > 601) {
//     viewDone.view1 = 2;
//     maxRange = 8;
//   } else if (size < 601) {
//     viewDone.view1 = 3;
//     maxRange = 16;
//   }
// }

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
    itemRight.innerHTML = itemActive.innerHTML;
    itemActive.innerHTML = itemLeft.innerHTML;
    addSet();
    petPanel1('#item-left');
    newHanler();

  } else {
    carousel.classList.remove("move-right");
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
  newSet = [];
  for (let i = 0; i < 3; i++) {
    do {
      nn = Math.floor(Math.random() * 8);
    } while (oldSet.includes(nn) || newSet.includes(nn))
    newSet.push(nn);
  }
  console.log('oldSet = ', oldSet);
  console.log('newSet = ', newSet);

}
// function addSet() {
//   let nn;
//   newSet = [];
//   for (let i = 0; i < 3; i++) {
//     do {
//       nn = Math.floor(Math.random() * 8);
//     } while (oldSet.includes(nn) || newSet.includes(nn))
//     newSet.push(nn);
//   }
//   console.log('oldSet = ', oldSet);
//   console.log('newSet = ', newSet);
//   oldSet = [];
//   newSet.forEach((item) => {
//     oldSet.push(item);
//   })
// }


