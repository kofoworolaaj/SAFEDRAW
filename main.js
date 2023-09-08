// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>50){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


// JavaScript for handling button click event
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button Clicked!');
});