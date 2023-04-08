const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal-img");
const imagenes = document.querySelectorAll(".imagen");

for(let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("click", () => {
        modal.style.display = "flex";
        imgModal.src = imagenes[i].src;
    });
}

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});