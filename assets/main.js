// You can put your individual, DOM-specific logic here.
window.stateCallback = () => {
	console.log('Something changed!')
}


  
  //on-click event for carousel//
  


  window.arenaCallback = () => {
    // Put your JavaScript in here!
    // This will run after Are.na’s API returns your data.
  
  
  const images = document.querySelectorAll('img')
  
  console.log(images)
  
  //Get all of my image blocks
  let imageBlocks = document.querySelectorAll('li.image-blocks')
  console.log(imageBlocks)
  = () => {
  imageBlocks.forEach((block)) {
  
    //Make the blocks react on click
    block.onClick = () => {
      
      //Add a class called active
      block.classList.add ('active')
  }
  
      //Remove a class called active
  block.querySelector('aside').onClick = () => {
    block.classList.remove ('active')
  }
  }
  }
  