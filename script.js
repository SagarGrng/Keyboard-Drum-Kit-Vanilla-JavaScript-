function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //get the audio tag of the keycode(data-key) we press in keyboard
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(key);
  key.classList.add('clicked');
  audio.currentTime= 0;//reset time
  audio.play();
  // setTimeout(function(){
  //   key.classList.remove('clicked');
  // },100) two methods to remove class 1.Set timout 2.Transitionend
}
function removeTransition(e){
  if(e.propertyName !== 'transform') return; //skip if its not a transform
  this.classList.remove('clicked');
}

const keys = document.querySelectorAll('.key'); //select all class having key class
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
