const button = document.getElementById('button')
const popup = document.getElementsByClassName('popup')[0]
var audio1 = document.getElementsByTagName('audio')[0]
var audio2 = document.getElementsByTagName('audio')[1]

button.addEventListener('click', () => {
    popup.classList.add('clicked')
    setTimeout(() => {
        popup.remove()
    }, 400);
})



document.querySelectorAll('.box').forEach(elem => {
    elem.addEventListener('click', () => {
        audio2.play()
    });
})

document.querySelectorAll('.box').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        audio1.play()
    })
})