setInterval(function(){
  $('.title').toggleClass('show');
},2000);


const select = document.getElementById('dropdown');
select.addEventListener('change', showSlider);

function showSlider() {
  document.querySelector("#alert").style.display = 'none';

    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(sliderContainer => {
      console.log (window.matchMedia("(min-width: 601px)").matches)
      if (sliderContainer.classList.contains(`slider-${select.value}`) && window.matchMedia("(min-width: 601px)").matches

      ) {
        sliderContainer.style.display = 'block';
        console.log(sliderContainer.classList.contains(`slider-${select.value}`))

      } else {
        sliderContainer.style.display = 'none';
      }
    });
   
  }

   // selecting the continent dropdown menu and all continent divs for mobile
const continentDropdown = document.querySelector('#continent');
const continentDivs = document.querySelectorAll('.continent-div');

// change in event listener on the continent dropdown
continentDropdown.addEventListener('change', () => {
  // loop through all continent divs and hide them
  continentDivs.forEach(div => div.style.display = 'none');
  
  // fetching the selected continent value from the dropdown
  const selectedContinent = continentDropdown.value;
  
  // showing the corresponding continent div
  document.querySelector(`#${selectedContinent}`).style.display = 'block';
});


  