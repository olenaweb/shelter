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
  petPanel(setPets);
});

function petPanel(setPets) {
  for (let i = 0; i < setPets; i++) {
    loadContent(shelter[i]);
    let card = document.querySelectorAll(".card");
    card[i].dataset.pet = shelter[i].name;
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[i].img);
    petImg[i].setAttribute("alt", shelter[i].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[i].name;
  }
}

function loadContent() {
  let templateClone = template.content.cloneNode(true);
  let itemCarousel = document.querySelector("#item-active");
  itemCarousel.append(templateClone);
}