window.addEventListener("scroll", (e) => {
document.querySelector("nav").style.backgroundColor = "#285467";

  //   console.log(window.scrollY);
  document.querySelector("nav").classList.add("arriba");
  if (window.scrollY > window.innerHeight) {
    document.querySelector("nav").classList.remove("arriba");
  }
});

[...document.querySelectorAll("section")].forEach((sec) => {
  sec.style.height = window.innerHeight + "px";
  console.log(sec);
});

console.log(window.innerHeight);
let sectionActual = 2;

window.addEventListener("mousemove", (e) => {
  if (window.scrollY < window.innerHeight) {
    document.querySelector("nav").classList.add("arriba");
  }
  if (e.screenY < 170 && window.scrollY < window.innerHeight) {
    document.querySelector("nav").classList.remove("arriba");
    document.querySelector("nav").style.backgroundColor = "#00000011";
    console.log(document.querySelector("nav ul .btn"));
    document.querySelector("nav ul .btn button").style.backgroundColor =
      "#00000011";
  }
});


const button = document.querySelector(".Abajo")
button.addEventListener("click", (e) => {
  console.log("aaaa");

  window.scrollTo({
     top: window.innerHeight,
     behavior: "smooth",
  });
  document.querySelector("nav").classList.add("arriba");
  if (window.scrollY > window.innerHeight) {
    document.querySelector("nav").classList.remove("arriba");
  }


});


//script mapa

const mapa = document.querySelector("mapa")

let map = L.map('mapa').setView([-34.906744887628925, -57.94279074422511], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.9066305063711, -57.94279074422511]).addTo(map)
    .bindPopup('lab unitec')
    .openPopup();

// setTimeout(() => {
//   window.scrollTo({
//     top: window.innerHeight * sectionActual,
//     behavior: "smooth",
//   });
//   document.querySelector("nav").classList.add("arriba");
//   if (window.scrollY > window.innerHeight) {
//     document.querySelector("nav").classList.remove("arriba");
//   }
// }, 2000);
