//references
//https://www.youtube.com/watch?v=kIRp6HOQzP8
//https://www.w3schools.com/js/js_json_arrays.asp
//https://www.w3schools.com/js/js_json_objects.asp
//https://stackoverflow.com/questions/45615509/search-through-json-with-keywords



const select = document.getElementById('dropdown');
select.addEventListener('change', showSlider);

function showSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    if (select.value === 'Asia') {
      sliderContainer.style.display = 'block';
    } else {
      sliderContainer.style.display = 'none';
    }
  }
  