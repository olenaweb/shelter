"use strict";
let range = 0;       // № экрана с животными 
let maxRange = 6;    // кол-во экранов с животными 
let choosenBtn = 1;  // по умолчанию первый экран table[0][1..8]
let mas = [];        // от 0 до 7
let table = [];      // двумерный массив  6x8
const centerBtn = document.querySelector(".nav-btn.center");
const endLeft = document.querySelector("#end-left");
endLeft.disabled = true;
const left = document.querySelector("#left");
left.disabled = true;
const right = document.querySelector("#right");
const endRight = document.querySelector("#end-right");


clickEventHandler(); // для nav-btn
getBoard();          // создание двумерного массива  6x8

// --------загрузка карточек------------
import shelter from "../../assets/json/animal.js";
import afterLoad from "../main/popup.js";
let setPets;
let template = document.querySelector("#template");
const itemActive = document.querySelector("#item-active");
if (itemActive.classList.contains("item2")) {
  setPets = 8;
  console.log('setPets = ', setPets);
} else {
  setPets = 3;
  console.log('setPets = ', setPets);
}

document.addEventListener("DOMContentLoaded", function () {
  getBoard();
  petPanel();
});

function clickEventHandler() {
  const Nav_BTN = document.querySelectorAll(".nav-btn");
  // function сохраняет контекст this, ()=>{} не сохраняет контекст this !!!!!!!!!!
  // поэтому передавалось значение Nav_BTN[i]
  for (let i = 0; i < Nav_BTN.length; i++) {
    Nav_BTN[i].addEventListener('click', function () {
      onClickBTN(this);
    })
  }
}

function onClickBTN(btn) {
  let id = btn.getAttribute("id");
  switch (id) {
    case "end-right":
      range = maxRange - 1;
      choosenBtn = maxRange;
      endRightRange();
      break;
    case "right":
      range++;
      choosenBtn++;
      if (choosenBtn == maxRange) {
        range = maxRange - 1;
        endRightRange();
      }
      break;
    case "center":
      break;
    case "left":
      range--;
      choosenBtn--;
      if (choosenBtn == 1) {
        range = 0;
        endLeftRange();
      }
      break;
    case "end-left":
      range = 0;
      choosenBtn = 1;
      endLeftRange();
      break;
  }
  centerBtn.textContent = choosenBtn.toString();
  petPanel();

  function endLeftRange() {
    right.classList.add("active-btn");
    endRight.classList.add("active-btn");
    right.classList.remove("none-active");
    endRight.classList.remove("none-active");
    right.disabled = false;
    endRight.disabled = false;

    left.classList.remove("active-btn");
    endLeft.classList.remove("active-btn");
    left.classList.add("none-active");
    endLeft.classList.add("none-active");
    left.disabled = true;
    endLeft.disabled = true;
  }

  function endRightRange() {
    left.classList.add("active-btn");
    endLeft.classList.add("active-btn");
    left.classList.remove("none-active");
    endLeft.classList.remove("none-active");
    left.disabled = false;
    endLeft.disabled = false;

    right.classList.remove("active-btn");
    endRight.classList.remove("active-btn");
    right.classList.add("none-active");
    endRight.classList.add("none-active");
    right.disabled = true;
    endRight.disabled = true;
  }
}


function petPanel() {
  let itemCarousel = document.querySelector("#item-active");
  itemCarousel.innerHTML = '';
  table[range].forEach((unit, i) => {
    loadContent();
    let card = document.querySelectorAll(".card");
    card[i].dataset.pet = shelter[unit].name;
    card[i].dataset.id = shelter[unit].id;
    card[i].classList.add("animate");
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[unit].img);
    petImg[i].setAttribute("alt", shelter[unit].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[unit].name;
  })
  afterLoad();  // addEventListener для карточек
}

function loadContent() {
  let templateClone = template.content.cloneNode(true);
  let itemCarousel = document.querySelector("#item-active");
  itemCarousel.append(templateClone);
}

// ----------------shuffle(array)---------------------------------- 
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function createMas() {
  mas = [];
  for (let i = 0; i < 8; i++) {
    mas.push(i);
  }
  return mas;
}

function getBoard() {
  createMas();
  let k;
  table = [];
  // Ини­циа­ли­зи­ро­вать мас­сив
  for (let row = 0; row < maxRange; row++) {
    k = 0;
    table[row] = new Array(8);
    mas = shuffle(mas);
    for (let col = 0; col < 8; col++) {
      table[row][col] = mas[k];
      k++;
    }
  }
}

