if(document.querySelector(".modal")){
    document.querySelector(".modal-confirm").addEventListener("click", () => {
        document.querySelector(".modal").classList.toggle("modal-show")
    })
    document.querySelector(".modal-undo").addEventListener("click", () => {
        document.querySelector(".modal").classList.toggle("modal-show")
    })
}



