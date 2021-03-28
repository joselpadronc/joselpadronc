export function handleModal() {
    const closeModal = document.querySelector(".modal-close");
    const openModal = document.querySelector(".modal-contact");
    const modalOverley = document.querySelector(".modal-overley");

    openModal.addEventListener("click", (e) => {
        e.preventDefault();
        modalOverley.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modalOverley.style.display = "none";
    });
}