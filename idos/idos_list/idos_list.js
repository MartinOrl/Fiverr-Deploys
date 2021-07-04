document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        let target = document.querySelector('.active-option')
        target ? target.classList.toggle('active-option') : ''

        option.classList.toggle('active-option')
        if(target !== option){
            document.querySelector('.active-holder').classList.toggle('active-holder')
            setTimeout(() => {

                document.querySelector(`#${option.innerHTML.toLowerCase()}`).classList.toggle('active-holder')
            },50)
        }



    })
})