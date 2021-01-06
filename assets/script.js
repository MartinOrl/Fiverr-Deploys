const button = document.getElementById('button')
const popup = document.getElementsByClassName('popup')[0]
var audio1 = document.getElementsByTagName('audio')[0]
var audio2 = document.getElementsByTagName('audio')[1]


var particleConfig = {
    "particles": {
      "number": {
        "value": 120,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.9075341114451881,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 0,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "right",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 0,
          "rotateY": 600
        }
      }
    },
    "retina_detect": true
  }




if(window.innerWidth < 992){
    document.getElementById('image').src = 'images/mob.jpg'
}

var changed = false

window.addEventListener('resize', () => {
    if(window.innerWidth < 992){
        document.getElementById('image').src = 'images/mob.jpg'
        changed = true
    }
    if(window.innerWidth > 992 && changed){
        document.getElementById('image').src='images/newbg.jpg'
    }
})

document.getElementsByClassName('disclaimer-toggle')[0].addEventListener('click', () => {
    popup.classList.remove('clicked')
})

button.addEventListener('click', () => {
    popup.classList.add('clicked')
})

document.querySelectorAll('.box').forEach(elem => {
    elem.addEventListener('click', () => {
        document.getElementById('contract').classList.remove('contract')
    })
})

document.getElementsByClassName('toggle')[0].addEventListener('click', () => {
    console.log("clicked toggle")
    document.getElementById('contract').classList.add('contract')
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

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});