const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});

var button = document.getElementsByClassName("button");
var textBox = document.getElementsByClassName("email");


