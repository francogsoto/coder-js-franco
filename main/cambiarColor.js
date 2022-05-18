//BOTON LUZ BACKGROUND

let container = document.getElementById("container_prendeApaga");
let buttonIcon = document.getElementById("button_icon");

function toggle() {
  container.classList.toggle("active");
  buttonIcon.classList.toggle("fa-sun");
  buttonIcon.classList.toggle("fa-moon");
}
