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

// Getting a reference to the shoe image element
const shoeImage = document.getElementById('shoe');

// Adding a click event listener to the image
shoeImage.addEventListener('click', () => {
  // Get the current position of the image
  const currentPosition = parseInt(shoeImage.style.top || '0');

  // Calculating the new position by subtracting 100 pixels
  const newPosition = currentPosition - 100;

  // Setting the new position on the image element
  shoeImage.style.top = newPosition + 'px';
});


function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}