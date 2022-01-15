'use strict';

const firstChoosenColor = document.querySelector('.firstColor')
const secondeChoosenColor = document.querySelector('.secondeColor')

document.querySelector('body').style.height = '100vh';
const colorChange = () => {
    document.querySelector('body').style.background = `linear-gradient(${firstChoosenColor.value}, ${secondeChoosenColor.value})`
    document.querySelector('.xColor').textContent = firstChoosenColor.value
    document.querySelector('.yColor').textContent = secondeChoosenColor.value
}; 

firstChoosenColor.addEventListener('change',function(){
    colorChange()
})
secondeChoosenColor.addEventListener('change',function(){
    colorChange()
})
