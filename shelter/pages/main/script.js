"use strict";
import shelter from "../../assets/json/animal.js";
console.log('animal = ', shelter);
for (let pet of shelter) {
  console.log('pet.name = ', pet.name.toLowerCase(), pet);
}

let template = document.querySelector("#template");
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 3; i++) {
    loadContent(shelter[i]);
    let card = document.querySelectorAll(".card")
    card[i].dataset.pet = shelter[i].name;
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[i].img);
    petImg[i].setAttribute("alt", shelter[i].name);
    let petsName = document.querySelectorAll(".pets-name");
    petsName[i].textContent = shelter[i].name;
  }
});

function loadContent() {
  let templateClone = template.content.cloneNode(true);
  let itemCarousel = document.querySelector("#item-active");
  itemCarousel.append(templateClone);
}