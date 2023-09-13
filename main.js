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



const toggleButton = document.getElementById('toggleButton');
        const table1 = document.getElementById('table1');
        const table2 = document.getElementById('table2');
        const table3= document.getElementById('table3');

        toggleButton.addEventListener('click', () => {
            if (table1.style.display === 'none') {
                table1.style.display = 'table';
                table2.style.display = 'none';
            } else {
                table1.style.display = 'none';
                table2.style.display = 'table';
            }
        });
const toggleButton1 = document.getElementById('toggleButton1');
        const table1 = document.getElementById('table1');
        const table2 = document.getElementById('table2');
        const table3= document.getElementById('table3');

        toggleButton.addEventListener('click', () => {
            if (table1.style.display === 'none') {
                table1.style.display = 'table';
                table2.style.display = 'none';
            } else {
                table1.style.display = 'none';
                table2.style.display = 'table';
            }
        });
const toggleButton2 = document.getElementById('toggleButton2');
        const table1 = document.getElementById('table1');
        const table2 = document.getElementById('table2');
        const table3= document.getElementById('table3');

        toggleButton.addEventListener('click', () => {
            if (table1.style.display === 'none') {
                table1.style.display = 'table';
                table2.style.display = 'none';
            } else {
                table1.style.display = 'none';
                table2.style.display = 'table';
            }
        });