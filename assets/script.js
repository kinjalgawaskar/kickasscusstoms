function moveLeft() {
  var girl = document.getElementById("kick");
  girl.classList.add("move");
  setTimeout(function() {
    window.location.href = "customs.html";
  }, 500);
}
