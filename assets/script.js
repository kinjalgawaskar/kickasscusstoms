// get the girl image element by its ID
const girl = document.getElementById('kick');
		
// add a click event listener to the girl image element
girl.addEventListener('click', function() {
  // redirect the user to the customs.html page
  window.location.href = 'customs.html';
});

function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}

function moveUp() {
  var shoe = document.getElementById("shoe");
  var currentPosition = parseInt(shoe.style.top) || 0;
  var newPosition = currentPosition - 30;
  shoe.style.top = newPosition + "px";
}