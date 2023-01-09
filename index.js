
var n = document.querySelectorAll(".drum").length;

// for(var i = 0; i < n; i++) {

    document.addEventListener("keydown", function (event) {

        var option = event.key;

        makeSound(option);

        keyPressed(option);

    })

for(var i=0;i<n;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var option = this.innerHTML;

        makeSound(option);

        keyPressed(option);
    })
}

function makeSound(key) {
    switch(key) {
        case "w" :
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a" :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s" :
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d" :
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j" :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k" :
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l" :
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default : console.log(option);
    }

}

function keyPressed(key) {
    var pressedKey = document.querySelector("." + key);

    pressedKey.classList.add("pressed");

    setTimeout(function() {
        pressedKey.classList.remove("pressed");
    }, 100);
}

    // document.addEventListener("keypress",function(event) {console.log(event.key);})

// }
