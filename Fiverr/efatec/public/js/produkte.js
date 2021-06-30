document.querySelector('#search').addEventListener('input', (e) => {
    document.querySelectorAll('.search-target').forEach(target => {
        if(!target.id.includes(e.target.value.toLowerCase())){
            target.style.display = 'none'
        }
        else{
            target.style.display = 'block'
        }
    })
})