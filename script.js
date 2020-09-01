let keydown = document.querySelector("[data-key='65']");
console.log(keydown);
function pressDown(e) {
  keydown.classList.add("selector");
}

window.addEventListener("keydown", pressDown);
