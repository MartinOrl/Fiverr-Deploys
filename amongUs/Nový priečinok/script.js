const button = document.getElementById('button')
const popup = document.getElementsByClassName('popup')[0]
var audio1 = document.getElementsByTagName('audio')[0]
var audio2 = document.getElementsByTagName('audio')[1]

if(window.innerWidth < 992){
    document.getElementById('image').src = './mobile.png'
}

document.getElementsByClassName('disclaimer-toggle')[0].addEventListener('click', () => {
    popup.classList.remove('clicked')
})

button.addEventListener('click', () => {
    popup.classList.add('clicked')
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