// --------загрузка карточек------------
"use strict";
let card;
let viewDone = {};
viewDone.view1 = 3;  //  size (window.innerwidth) > 1071 , 3,2,1 в зависимости от window.innerwidth
let oldSet = [];
let newSet = [];
import shelter from "../../assets/json/animal.js";
import afterLoad from "../main/popup.js";

const evaluationCriteria = {
  mainPage: {
    total: 70,
    sections: {
      markupValidation: {
        points: 10,
        items: [
          {
            title: "Markup is valid per validator",
            points: 5,
            details: "No errors/warnings: full points. Warnings only: +2.5",
          },
          {
            title: "Text-based logo, exactly one h1, favicon added",
            points: 5,
          },
        ],
      },
      layoutMatchesDesign: {
        points: 35,
        items: [
          { title: "Header block", points: 5 },
          { title: "Not only block", points: 5 },
          { title: "About block", points: 5 },
          { title: "Our Friends block", points: 5 },
          { title: "Help block", points: 5 },
          { title: "In addition block", points: 5 },
          { title: "Footer block", points: 5 },
        ],
      },
      cssRequirements: {
        points: 15,
        items: [
          {
            title: "Help block uses grid/flex layout",
            points: 5,
          },
          {
            title: "Layout stays centered on width > 1280px",
            points: 5,
          },
          {
            title: "Background color stretches full page width",
            points: 5,
          },
        ],
      },
      interactivity: {
        points: 10,
        items: [
          {
            title: "About the Shelter highlighted/non-clickable, others interactive, smooth anchors, links behavior",
            points: 5,
          },
          {
            title: "Pet cards fully hover-interactive, smooth hover/active styles without layout shift",
            points: 5,
          },
        ],
      },
    },
  },
  petsPage: {
    total: 40,
    sections: {
      markupValidation: {
        points: 10,
        items: [
          {
            title: "Markup is valid per validator (same as Main)",
            points: 5,
          },
          {
            title: "Text-based logo, exactly one h1, favicon added",
            points: 5,
          },
        ],
      },
      layoutMatchesDesign: {
        points: 15,
        items: [
          { title: "Header block", points: 5 },
          { title: "Our Friends block", points: 5 },
          { title: "Footer block", points: 5 },
        ],
      },
      cssRequirements: {
        points: 5,
        items: [
          {
            title: "On width > 1280px layout stays centered and background is full-width",
            points: 5,
          },
        ],
      },
      interactivity: {
        points: 10,
        items: [
          {
            title: "Our pets highlighted/non-clickable, others interactive, correct pagination states, smooth anchors, links behavior",
            points: 5,
          },
          {
            title: "Pet cards fully hover-interactive, smooth hover/active styles without layout shift",
            points: 5,
          },
        ],
      },
    },
  },
};

function logEvaluationCriteria() {
  console.log(' В работе сделаны уже все три этапа, картинки загружаются программно, поэтому выбранные картинки могут быть другими  !!! ',);
  console.group("Shelter: критерии оценки");
  console.log("Структура критериев:", evaluationCriteria);
  console.table([
    { page: "Main", totalPoints: evaluationCriteria.mainPage.total },
    { page: "Pets", totalPoints: evaluationCriteria.petsPage.total },
    {
      page: "Total",
      totalPoints: evaluationCriteria.mainPage.total + evaluationCriteria.petsPage.total,
    },
  ]);
  console.groupEnd();
}

logEvaluationCriteria();

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

  } else {
    itemLeft.innerHTML = itemActive.innerHTML;
    itemActive.innerHTML = itemRight.innerHTML;
    addSet();
    petPanel3('#item-right');
  }
  newHanler();
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
  let activeSetCards = itemActive.querySelectorAll(".item .card");
  activeSetCards.forEach((card) => {
    oldactiveSet.push(+card.dataset.id);
  })
  if (activeSetCards.length > 0) {
    oldSet = [];
  }
  newSet = [];
  for (let i = 0; i < 3; i++) {
    do {
      nn = Math.floor(Math.random() * 8);
    } while (oldactiveSet.includes(nn) || newSet.includes(nn) || oldSet.includes(nn))
    newSet.push(nn);
  }
  // console.log(' oldSet= ', oldSet);
  // console.log('oldactiveSet = ', oldactiveSet);
  // console.log('newSet = ', newSet);
}



