'use strict';

window.onscroll = function(){
  let screenValue = scrollY;
  document.querySelector('.stars').style.left = screenValue + 'px'
  document.querySelector('.moon').style.top = screenValue * 3 + 'px'
  document.querySelector('.mountain3').style.top = screenValue*1.5 + 'px'
  document.querySelector('.mountain4').style.top = screenValue*1.2 + 'px'
  document.querySelector('.river').style.top = screenValue + 'px'
  document.querySelector('.boat').style.top = screenValue + 'px'
  if(scrollY <=65){
  document.querySelector('.HelloWorld').style.fontSize = screenValue + 'px'
    }else{
      document.querySelector('.HelloWorld').style.fontSize = '65px'
      document.querySelector('.HelloWorld').style.position = 'fixed'
      if(scrollY >= 410){
        document.querySelector('.HelloWorld').style.display = 'none'
        document.querySelector('.MovingImages').style.background = 'linear-gradient(#376281, #10001f)'
      }else{
        document.querySelector('.HelloWorld').style.display = 'block'
        document.querySelector('.MovingImages').style.background = 'linear-gradient(#200016, #10001f)'
      }
  }

}