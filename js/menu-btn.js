
console.log('hola')
      
const phone = window.matchMedia("screen and (max-width: 767px)");
console.log(phone)

const menu = document.querySelector(".nav-menu_items");
console.log(menu)

const menuButton = document.querySelector("#nav-menu_btn");
console.log(menuButton)

phone.addListener(validation);
function validation(event) {
  if (event.matches) {
    menuButton.addEventListener("click", hideShow);
  } else {
    menuButton.removeEventListener("click", hideShow);
  }
}
validation(phone);
function hideShow() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
    