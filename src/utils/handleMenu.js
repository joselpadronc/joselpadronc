export function handleMenu() {
    const menu = this.shadowRoot.querySelector(".nav-menu_items");
    const menuButton = this.shadowRoot.querySelector("#nav-menu_btn");
    menuButton.addEventListener("click", () => {
        if (menu.classList.contains("is-active")) {
            menu.classList.remove("is-active");
        } else {
            menu.classList.add("is-active");
        }
    });
}