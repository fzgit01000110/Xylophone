//Variables

let buttons = document.querySelectorAll(".xylophone");
let clickValue;
let keyValue;



//Events

for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener("click", HandleClick);
}

document.addEventListener("keydown", HandleKeydown);

function HandleClick() {
    clickValue = this.innerText;
    PlaySound(clickValue);
    AddAnimation(clickValue);
}

function HandleKeydown(event) {
    keyValue = event.key;
    if (keyValue === "0" || keyValue === "1" || keyValue === "2"
        || keyValue === "3" || keyValue === "4" || keyValue === "5"
        || keyValue === "6" || keyValue === "7" || keyValue === "8" || keyValue === "9") {
        PlaySound(keyValue);
        AddAnimation(keyValue);
    }
}

//Play Sound Function

function PlaySound(key) {
    switch (key) {

        case "1":
            let one = new Audio("sounds/1.mp3");
            one.play();
            break;

        case "2":
            let two = new Audio("sounds/2.mp3");
            two.play();
            break;

        case "3":
            let three = new Audio("sounds/3.mp3");
            three.play();
            break;

        case "4":
            let four = new Audio("sounds/4.mp3");
            four.play();
            break;

        case "5":
            let five = new Audio("sounds/5.mp3");
            five.play();
            break;

        case "6":
            let six = new Audio("sounds/6.mp3");
            six.play();
            break;

        case "7":
            let seven = new Audio("sounds/7.mp3");
            seven.play();
            break;

        case "8":
            let eight = new Audio("sounds/8.mp3");
            eight.play();
            break;

        case "9":
            let nine = new Audio("sounds/9.mp3");
            nine.play();
            break;

        case "0":
            let zero = new Audio("sounds/0.mp3");
            zero.play();
            break;

        default:
            console.log(key);
            break;

    }
}

function AddAnimation(key){
    document.querySelector(".img-" + key).classList.add("pressed");
    setTimeout(function(){ 
        document.querySelector(".img-" + key).classList.remove("pressed"); 
    }, 100);
}


