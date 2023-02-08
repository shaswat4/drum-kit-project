var btns = document.querySelectorAll(".drum");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
