"use strict";
let range = 0;       // № экрана с животными 
let maxRange = 6;    // кол-во экранов с животными 
let choosenBtn = 1;  // по умолчанию первый экран table[0][1..8]
let mas = [];        // от 0 до 7
let viewDone = {};
viewDone.resolution = 1280;
viewDone.view1 = 1;
viewDone.view2 = 0;
// console.log('viewDone = ', viewDone);
let table = [];       // двумерный массив  6x8
let table2 = [];      // двумерный массив  8x6
let table3 = [];      // двумерный массив  12x4
const centerBtn = document.querySelector(".nav-btn.center");
const endLeft = document.querySelector("#end-left");
endLeft.disabled = true;
const left = document.querySelector("#left");
left.disabled = true;
const right = document.querySelector("#right");
const endRight = document.querySelector("#end-right");

// --------загрузка карточек------------
import shelter from "../../assets/json/animal.js";
import afterLoad from "../main/popup.js";
let template = document.querySelector("#template");

document.addEventListener("DOMContentLoaded", function () {
  clickEventHandler(); // для nav-btn
  getBoard();          // создание двумерного массива  6x8
  loadPets();          // загрузка карточек petPanel()
});

// window.addEventListener('resize', function (event) {
// }, true);

window.onresize = function (event) {
  loadPets();
};

function loadPets() {
  let size = window.innerWidth;
  if (size > 1071) {
    viewDone.view1 = 1;
    maxRange = 6;
  } else if (size < 1071 && size > 601) {
    viewDone.view1 = 2;
    maxRange = 8;
  } else if (size < 601) {
    viewDone.view1 = 3;
    maxRange = 12;
  }

  if (viewDone.view1 !== viewDone.view2) {
    range = 1;
    centerBtn.textContent = range.toString();
    endLeftRange();
    petPanel();
  }
}


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
      enableBtnLeft();
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
      enableBtnRight();
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
}
// --------обработка клавиш------
function enableBtnLeft() {
  left.classList.add("active-btn");
  endLeft.classList.add("active-btn");
  left.classList.remove("none-active");
  endLeft.classList.remove("none-active");
  left.disabled = false;
  endLeft.disabled = false;
}
function enableBtnRight() {
  right.classList.add("active-btn");
  endRight.classList.add("active-btn");
  right.classList.remove("none-active");
  endRight.classList.remove("none-active");
  right.disabled = false;
  endRight.disabled = false;
}

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
// ------Загрузка Pets Card-----
function petPanel() {
  let itemCarousel = document.querySelector("#item-active");
  itemCarousel.innerHTML = '';
  let kolvo;
  switch (viewDone.view1) {
    case 1:
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
        kolvo = i;
      })
      break;
    case 2:
      table2[range].forEach((unit, i) => {
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
        kolvo = i;
      })
      break;
    case 3:
      table3[range].forEach((unit, i) => {
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
        kolvo = i;
      })
      break;
  }
  afterLoad();  // addEventListener для карточек
  viewDone.view2 = viewDone.view1;
  viewDone.resolution = window.innerHeight;
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

// Ини­циа­ли­зи­ро­вать мас­сивы   row=6x8, 8x4 , 12x4  table1, table2, table3
function getBoard() {
  createMas();
  let k, k21, k22, k3;
  table = [], table2 = [], table3 = [];
  let table21 = [], table22 = [], table31 = [], table32 = [],
    mas21 = [], mas22 = [], mas31 = [], mas32 = [];
  for (let row = 0; row < 6; row++) {
    k = 0, k21 = 0, k3 = 0;
    table[row] = new Array(8);
    table21[row] = new Array(6);
    table31[row] = new Array(4);
    table32[row] = new Array(4);
    mas = shuffle(mas);
    mas21 = mas.slice(0, 6);
    mas31 = mas.slice(0, 4);
    mas32 = mas.slice(4, 8);
    // -----1280-----
    for (let col = 0; col < 8; col++) {
      table[row][col] = mas[k];
      k++;
    }
    // ----320-----
    for (let col3 = 0; col3 < 4; col3++) {
      table31[row][col3] = mas31[k3];
      table32[row][col3] = mas32[k3];
      k3++;
    }
    // -----768-----
    for (let col21 = 0; col21 < 6; col21++) {
      table21[row][col21] = mas21[k21];
      k21++;
    }

  }
  table3 = [].concat(table31, table32);
  for (let row22 = 0; row22 < 2; row22++) {
    k22 = 0;
    table22[row22] = new Array(6);
    mas22 = shuffle(mas).slice(0, 6);
    for (let col22 = 0; col22 < 6; col22++) {
      table22[row22][col22] = mas22[k22];
      k22++;
    }
  }
  table2 = [].concat(table21, table22);
  // console.log('table = ', table);
  // console.log('table2 = ', table2);
  // console.log('table3 = ', table3);
}

