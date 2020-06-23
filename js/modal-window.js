const closeModal = document.querySelectorAll(".modal-close")[0];
const openModal = document.querySelectorAll(".modal-contact")[0];
const modalOverley = document.querySelectorAll(".modal-overley")[0];

openModal.addEventListener("click", function(e){
    e.preventDefault();
    modalOverley.style.display = "flex";
});

closeModal.addEventListener("click", function(e){
    modalOverley.style.display = "none";
});
