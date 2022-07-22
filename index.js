// var numBut = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numBut; i++) {

//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
//     function handleClick() {
    
//         alert("I got clicked!"); 
//     }
// }
//when button is clicked
var numBut = document.querySelectorAll(".drum").length;
var i = 0;
while (i < numBut){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
        var buttonInnerHTML = this.innerHTML;

       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    });i++;

    
    //when button is pressed on key
}
document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound (key) {
    switch (key) {
        case "w":
            let audio = new Audio("sounds/crash.mp3").play();
            break;
         case "a":
             let kick = new Audio("sounds/kick-bass.mp3").play();
             break;
         case "s":
             let snare = new Audio("sounds/snare.mp3").play();
             break;
         case "d":
             let tom1 = new Audio("sounds/tom-1.mp3").play();
             break;
         case "j":
             let tom2 = new Audio("sounds/tom-2.mp3").play();
             break;
         case "k":
             let tom3 = new Audio("sounds/tom-3.mp3").play();
             break;
         case "l":
             let tom4 = new Audio("sounds/tom-4.mp3").play();
             break;

        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() { 
        activeButton.classList.remove("pressed");
    }, 100);
}

