// active link
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});
// menu toggle
const menu = document.querySelector(".menu");
const navBar = document.querySelector("nav");
menu.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
window.addEventListener("scroll", () => {
  navBar.classList.remove("show", window.scrollY > 100);
});
// loading page
const loader = document.querySelector(".loader-page");
window.addEventListener("load", () => {
  loader.classList.add("hidden");
  window.addEventListener("transitionend", () => {
    document.body.removeChild("loader-page");
  });
});
// fixed nav bar
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("stiky", window.scrollY > 100);
});
// change images start
let myImage = document.getElementById("img");
let images = [
  "img/shadow 1.jpg",
  "img/shadow 2.jpg",
  "img/shadow 3.jpg",
  "img/shadow 4.jpg",
];
// call the function evry 10s
changeImg(myImage, images);
function changeImg(myImage, images) {
  setInterval(() => {
    // get randam number
    const randomNumber = Math.floor(Math.random() * images.length);
    // change the src of the image tag
    myImage.src = images[randomNumber];
  }, 20000);
}
// change about images start
let shadowNft = document.getElementById("shadow");
let nft = [
  "img/shadow1.jpg",
  "img/shadow2.jpg",
  "img/shadow3.jpg",
  "img/shadow4.jpg",
  "img/shadow5.jpg",
  "img/shadow6.jpg",
];
// call the function evry 10s
changeImg(shadowNft, nft);
function changeImg(shadowNft, nft) {
  setInterval(() => {
    // get randam number
    const randomNumber = Math.floor(Math.random() * nft.length);
    // change the src of the image tag
    shadowNft.src = nft[randomNumber];
  }, 20000);
}
