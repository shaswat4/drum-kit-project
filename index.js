
//click event listener
var btns = document.querySelectorAll(".drum");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {

    //playSound( "sounds/crash.mp3" );
    
    // console.log(this);
    // console.log( this.innerHTML);

    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

//keypress event listner
document.addEventListener("keypress" ,
  function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
  }
);

//playing sound 
function playSound( path ){
  var audio = new Audio( path );
  audio.play();
}

function makeSound( key ){

  switch( key ){
    case "w":
      playSound( "sounds/crash.mp3" );
      break;

    case "a":
      playSound( "sounds/kick-bass.mp3" );
      break;
    
      case "s":
      playSound( "sounds/snare.mp3" );
      break;

      case "d":
      playSound( "sounds/tom-1.mp3" );
      break;

      case "j":
      playSound( "sounds/tom-2.mp3" );
      break;

      case "k":
      playSound( "sounds/tom-3.mp3" );
      break;

      case "l":
      playSound( "sounds/tom-4.mp3" );
      break;

      default :
      console.log(key);
  }

}

//button animation after click or keypress
function buttonAnimation( key ){
  var activeBtn = document.querySelector("." +key );

  activeBtn.classList.toggle("pressed");

  setTimeout( 
    function (){
      activeBtn.classList.toggle("pressed");
    },
    200
  );

}