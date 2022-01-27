document.querySelectorAll(".checkbox").forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checkbox-checked")
    })
})

document.querySelectorAll(".filter-group-head").forEach(group => {
    group.addEventListener("click", () => {
        group.parentElement.classList.toggle("filter-collapsed")
    })
})