const select = document.getElementById('dropdown');
select.addEventListener('change', showSlider);


function showSlider() {
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(sliderContainer => {
      if (sliderContainer.classList.contains(`slider-${select.value}`)) {
        sliderContainer.style.display = 'block';
        console.log(sliderContainer.classList.contains(`slider-${select.value}`))

      } else {
        sliderContainer.style.display = 'none';
      }
    });
  }
  
let searchValue = "New York"
search()
  function search() {
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(sliderContainer => {
      let subtitle = sliderContainer.querySelector (".sub-title")
      console.log (subtitle.innerHTML)
      if (searchValue == subtitle.innerHTML) {
        sliderContainer.style.display = 'block';
      } else {
        sliderContainer.style.display = 'none';
      }
    });
  }
  
create an input button     whatever input has (console log it)     take the value and run serach function using that     