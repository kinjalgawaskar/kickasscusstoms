// // // You can put your individual, DOM-specific logic here.
// // window.stateCallback = () => {
// // 	console.log('Something changed!')
// // }


  
// //   //on-click event for carousel//
  


// //   window.arenaCallback = () => {
// //     // Put your JavaScript in here!
// //     // This will run after Are.na’s API returns your data.
  
  
// //   const images = document.querySelectorAll('img')
  
// //   console.log(images)
  
// //   //Get all of my image blocks
// //   let imageBlocks = document.querySelectorAll('li.image-blocks')
// //   console.log(imageBlocks)
// //   = () => {
// //   imageBlocks.forEach((block)) {
  
// //     //Make the blocks react on click
// //     block.onClick = () => {
      
// //       //Add a class called active
// //       block.classList.add ('active')
// //   }
  
// //       //Remove a class called active
// //   block.querySelector('aside').onClick = () => {
// //     block.classList.remove ('active')
// //   }
// //   }
// //   }
  














//   // Get the elements that you want to make draggable and droppable
// const donkey = document.getElementById('kickass');
// const shoe = document.getElementById('kick');

// // Add event listeners to the draggable elements
// shoe.addEventListener('dragstart', dragStart);

// // Add event listeners to the droppable elements
// donkey.addEventListener('dragover', dragOver);
// donkey.addEventListener('drop', drop);

// // Function to handle the start of the drag event
// function dragStart(event) {
//   // Set the data that will be transferred during the drag
//   event.dataTransfer.setData('text', event.target.id);
// }

// // Function to handle the dragover event
// function dragOver(event) {
//   // Prevent the default action of the browser
//   event.preventDefault();
// }

// // Function to handle the drop event
// function drop(event) {
//   // Prevent the default action of the browser
//   event.preventDefault();

//   // Get the ID of the dragged element from the data transfer
//   const id = event.dataTransfer.getData('text');

//   // Get the dragged element
//   const element = document.getElementById(id);

//   // Append the dragged element to the drop target
//   event.target.appendChild(element);
//   window.open("customs.html", "_blank");

// }


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}