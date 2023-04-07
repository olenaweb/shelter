// --------загрузка карточек------------
"use strict";
import shelter from "../../assets/json/animal.js";
let setPets;
let template = document.querySelector("#template");
const itemActive = document.querySelector("#item-active");
if (itemActive.classList.contains("item2")) {
  setPets = 8;
  console.log('pagePets = ', setPets);
} else {
  setPets = 3;
  console.log('pagePets = ', setPets);
}

document.addEventListener("DOMContentLoaded", function () {
  petPanel1(setPets);
  petPanel2(setPets);
  petPanel3(setPets);
});



function petPanel1(setPets) {
  for (let i = 0; i < setPets; i++) {
    // loadContent(shelter[i], item);
    let templateClone = template.content.cloneNode(true);
    let itemCarousel = document.querySelector('#item-left');
    itemCarousel.append(templateClone);

    let card = document.querySelectorAll("#item-left .card");
    card[i].dataset.pet = shelter[i].name;
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[i].img);
    petImg[i].setAttribute("alt", shelter[i].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[i].name;
  }
}

function petPanel2(setPets) {
  for (let i = 0; i < setPets; i++) {
    // loadContent(shelter[i], item);
    let templateClone = template.content.cloneNode(true);
    let itemCarousel = document.querySelector('#item-active');
    itemCarousel.append(templateClone);

    let card = document.querySelectorAll("#item-active .card");
    console.log('i = ', i);
    console.log(' card= ', card);
    console.log('shelter[i] = ', shelter[i]);
    card[i].dataset.pet = shelter[i].name;
    let petImg = document.querySelectorAll("#item-active .pet-img");
    petImg[i].setAttribute("src", shelter[i].img);
    petImg[i].setAttribute("alt", shelter[i].name);
    let petsName = document.querySelectorAll("#item-active .pets-name");
    petsName[i].textContent = shelter[i].name;
  }
}
function petPanel3(setPets) {
  for (let i = 0; i < setPets; i++) {
    // loadContent(shelter[i], item);
    let templateClone = template.content.cloneNode(true);
    let itemCarousel = document.querySelector('#item-right');
    itemCarousel.append(templateClone);
    let card = document.querySelectorAll("#item-right .card");
    card[i].dataset.pet = shelter[i].name;
    let petImg = document.querySelectorAll("#item-right .pet-img");
    petImg[i].setAttribute("src", shelter[i].img);
    petImg[i].setAttribute("alt", shelter[i].name);
    let petsName = document.querySelectorAll("#item-right .pets-name");
    petsName[i].textContent = shelter[i].name;
  }
}

function loadContent(item) {
  let templateClone = template.content.cloneNode(true);
  let itemCarousel = document.getElementById(item);
  itemCarousel.append(templateClone);
}