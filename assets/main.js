//references
//https://www.youtube.com/watch?v=kIRp6HOQzP8
//https://www.w3schools.com/js/js_json_arrays.asp
//https://www.w3schools.com/js/js_json_objects.asp
//https://stackoverflow.com/questions/45615509/search-through-json-with-keywords



const dropdown = document.getElementById("dropdown");
const items = document.querySelectorAll(".item");

dropdown.onchange = function() {
  const selectedCategory = dropdown.value;

  // show all items if "all" is selected
  if (selectedCategory === "all") {
    items.forEach(item => {
      item.style.display = "block";
    });
    return;
  }

  // hide all items that don't belong to the selected category
  items.forEach(item => {
    if (item.classList.contains(selectedCategory)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
