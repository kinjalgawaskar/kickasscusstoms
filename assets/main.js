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
  


      // search button
const searchBtn = document.querySelector("#search-btn");
  const searchInput = document.querySelector("#search-input");
  
  searchBtn.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    // perform search with searchTerm
    console.log(searchTerm);
  });
  