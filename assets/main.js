
  // Get the elements that you want to make draggable and droppable
const donkey = document.getElementById('kickass');
const shoe = document.getElementById('kick');

// Add event listeners to the draggable elements
shoe.addEventListener('dragstart', dragStart);

// Add event listeners to the droppable elements
donkey.addEventListener('dragover', dragOver);
donkey.addEventListener('drop', drop);

// Function to handle the start of the drag event
function dragStart(event) {
  // Set the data that will be transferred during the drag
  event.dataTransfer.setData('text', event.target.id);
}

// Function to handle the dragover event
function dragOver(event) {
  // Prevent the default action of the browser
  event.preventDefault();
}

// Function to handle the drop event
function drop(event) {
  // Prevent the default action of the browser
  event.preventDefault();

  // Get the ID of the dragged element from the data transfer
  const id = event.dataTransfer.getData('text');

  // Get the dragged element
  const element = document.getElementById(id);

  // Append the dragged element to the drop target
  event.target.appendChild(element);
  window.open("customs.html", "_blank");

}

