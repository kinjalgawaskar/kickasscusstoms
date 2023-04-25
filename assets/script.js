function moveGirl() {
  var girlImage = document.getElementById("kick");
  girlImage.style.position = "absolute";
  girlImage.style.right = "0px";
  var rightPos = 0;
  var distance = 30; // 30 pixels
  var startTime = new Date().getTime();
  var duration = 2000; // 2 seconds
  var id = setInterval(frame, 10);
  function frame() {
    var now = new Date().getTime();
    var elapsedTime = now - startTime;
    if (elapsedTime >= duration) {
      clearInterval(id);
      window.location.href = "customs.html";
    } else {
      var progress = elapsedTime / duration;
      rightPos = distance * (1 - progress);
      girlImage.style.right = rightPos + 'px';
    }
  }
}
