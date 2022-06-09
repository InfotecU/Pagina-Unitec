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
const sectionActual = 2;

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
