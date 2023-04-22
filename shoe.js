
  // Making shoe element droppable
  const donkey = document.getElementById('kickass');
  const shoe = document.getElementById('kick');
  
  // Adding event listeners to the shoe
  shoe.addEventListener('dragstart', dragStart);
  
  // Adding event listeners to the shoe
  donkey.addEventListener('dragover', dragOver);
  donkey.addEventListener('drop', drop);
  
  // Function to handle the start of the dragging the shoe
  function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
  
  // Function to handle the shoe dragover event
  function dragOver(event) {
    // Adding prevention of the default browser action (just for my personal reference)
    event.preventDefault();
  }
  
  // Adding function to handle the drop event
  function drop(event) {
    // Adding prevention of the default browser action (just for my personal reference)
    event.preventDefault();
  
    // Fetching the shoe ID from the data transfer
    const id = event.dataTransfer.getData('text');
  
    // Get the shoe
    const element = document.getElementById(id);
  
    // Appending the shoe to the drop target
    event.target.appendChild(element);
    window.open("customs.html", "_self");
  
  }
  