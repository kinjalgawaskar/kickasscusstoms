// get the select element
const select = document.querySelector('#dropdown');

// get all the div elements that should be toggled
const europe = document.querySelector('.slider-Europe');
const asia = document.querySelector('.slider-container');
const northAmerica = document.querySelector('.slider-NorthAmerica');
const southAmerica = document.querySelector('.slider-SouthAmerica');
const oceania = document.querySelector('.slider-Oceania');
const africa = document.querySelector('.slider-Africa');
const antartica = document.querySelector('.slider-Antartica');

// add an event listener to the select element
select.addEventListener('change', function() {
  // hide all the div elements
  europe.style.display = 'none';
  asia.style.display = 'none';
  northAmerica.style.display = 'none';
  southAmerica.style.display = 'none';
  oceania.style.display = 'none';
  africa.style.display = 'none';
  antartica.style.display = 'none';

  // show the selected div element based on the selected option
  const selectedOption = select.options[select.selectedIndex].text;
  switch (selectedOption) {
    case 'Asia':
      asia.style.display = 'block';
      break;
    case 'Europe':
      europe.style.display = 'block';
      break;
    case 'North America':
      northAmerica.style.display = 'block';
      break;
    case 'South America':
      southAmerica.style.display = 'block';
      break;
    case 'Oceania':
      oceania.style.display = 'block';
      break;
    case 'Africa':
      africa.style.display = 'block';
      break;
    case 'Antartica':
      antartica.style.display = 'block';
      break;
  }
});
