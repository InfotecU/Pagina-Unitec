[...document.querySelectorAll("section")].forEach((sec) => {
  if (sec.classList.contains("banner")) {
    sec.style.height = "270px";
  } else {
    sec.style.height = window.innerHeight + "px";
  }
  console.log(sec);
});
