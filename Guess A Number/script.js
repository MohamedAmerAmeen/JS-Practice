'use strict';
 // document.querySelector('.message').textContent = 'Congratz ✔'
 // document.querySelector('.number').textContent = '!'
 // document.querySelector('.score').textContent = '19'
 // document.querySelector('.guess').textContent = 'Congratz ✔'

let RandomNumber = Math.trunc(Math.random()*20) + 1
let CurrentScore = document.querySelector('.score').textContent = 20
console.log(RandomNumber)

document.querySelector('.check').addEventListener('click',function(){
  let guess = Number(document.querySelector('.guess').value)
  if(!guess){
    document.querySelector('.message').textContent = 'Please enter a number ❗❗'
  }else if (guess === RandomNumber) {
    document.querySelector('.message').textContent = 'Congratz ✔'
    document.querySelector('.number').textContent = guess
    document.querySelector('.highscore').textContent = CurrentScore
    document.querySelector('body').style.backgroundColor='green'
  }
  else{
    document.querySelector('.message').textContent = guess > RandomNumber ? 'Too High⏫': 'Too Low⏬'
    if(CurrentScore === 0 ){
      document.querySelector('.check').disabled
    }else{
      document.querySelector('.score').textContent = --CurrentScore
    }
  }
})


document.querySelector('.again').addEventListener('click',function(){
  RandomNumber = Math.trunc(Math.random()*20) + 1
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = 20
  document.querySelector('.guess').value = ''
  document.querySelector('.highscore').textContent = 0
  document.querySelector('body').style.backgroundColor = '#222'

})
