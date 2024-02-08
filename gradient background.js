var css = document.querySelector('h3')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var color3 = document.querySelector('.color3')
var body = document.getElementById('bodyy')

function style() {
    body.style.background = 
    'linear-gradient(90deg,' + color1.value + 
    ', ' + color2.value + ', ' + color3.value + ')'
    body.style.backgroundRepeat = 'no-repeat'
    css.textContent = body.style.background + ';'
}

color1.addEventListener('input', style)

color2.addEventListener('input', style)

color3.addEventListener('input', style)

