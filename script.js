const header =document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});

// var button = document.getElementsByClassName("button");
// var textBox = document.getElementsByClassName("email");

// let names=["Rahul","Neha","Aman","Rishab"]

// for (let index in names) {
//     alert("Please select a name: " +index+" : "+ names[index]);
// }

// // let one=1;
// // let two=2;
// // let three=3;
// // let four=4;


// // let value=`1:${one} 2:${two} 3:${three} 4:${four}`;

// // alert(value)