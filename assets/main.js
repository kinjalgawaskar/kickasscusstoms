const carousel = document.getElementById("carousel");
const list = carousel.querySelector("ul");
const items = list.querySelectorAll("li");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentItem = 0;
let scrollAmount = 0;
const scrollStep = 300;
const delay = 50;

function scrollLeft() {
  if (currentItem > 0) {
    currentItem--;
    scrollAmount -= items[currentItem].offsetWidth;
    scrollTo(scrollAmount, delay);
  }
}

function scrollRight() {
  if (currentItem < items.length - 1) {
    scrollAmount += items[currentItem].offsetWidth;
    currentItem++;
    scrollTo(scrollAmount, delay);
  }
}

function scrollTo(position, duration) {
  const difference = position - list.scrollLeft;
  const perTick = difference / duration * 10;

  setTimeout(function() {
    list.scrollLeft += perTick;
    if (list.scrollLeft === position) return;
    scrollTo(position, duration - 10);
  }, 10);
}

prev.addEventListener("click", scrollLeft);
next.addEventListener("click", scrollRight);
