const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});

var button = document.getElementsByClassName("button");
var textBox = document.getElementsByClassName("email");
textBox.addEventListener("keyup", function (event) {

    // Checking if key pressed is ENTER or not
    // if the key pressed is ENTER
    // click listener on button is called
    if (event.keyCode == 13) {
        button.click();}
    });