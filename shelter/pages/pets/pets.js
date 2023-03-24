let shelter = [
  {
    image: "../../assets/images/katrine.png",
    name: "Katrine"
  },
  {
    image: "../../assets/images/Jennifer.png",
    name: "Jennifer"
  },
  {
    image: "../../assets/images/Woody.png",
    name: "Woody"
  },
  {
    image: "../../assets/images/Sophia.png",
    name: "Sophia"
  },
  {
    image: "../../assets/images/Timmy.png",
    name: "Timmy"
  },
  {
    image: "../../assets/images/Charly.png",
    name: "Charly"
  },
  {
    image: "../../assets/images/Scarlett.png",
    name: "Scarlett"
  },
  {
    image: "../../assets/images/Freddie.png",
    name: "Freddie"
  },
];

let template = document.querySelector("#template");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < shelter.length; i++) {
    loadContent(shelter[i]);
    let petImg = document.querySelectorAll(".pet-img");
    petImg[i].setAttribute("src", shelter[i].image);
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