const select = document.getElementById('dropdown');
select.addEventListener('change', showSlider);


function showSlider() {
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(sliderContainer => {
      if (sliderContainer.classList.contains(`slider-${select.value}`)) {
        sliderContainer.style.display = 'block';
      } else {
        sliderContainer.style.display = 'none';
      }
    });
  }
  