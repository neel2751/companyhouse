//Show and hide hamburguer menu in small screens 
const btn = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');
const close = document.querySelector('.close');
const home = document.querySelector(".topnav");


btn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    home.classList.toggle('mt-60');
    
});

close.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    home.classList.toggle('mt-60');
});


// window.addEventListener('scroll',() => {
//     console.log(window.scrollY);

// //    var navbar = document.querySelector('.navbar');
// //    navbar.classList.toggle('stick', window.scrollY > 0);
// });
// const menu = document.getElementById("close");
// // const ulMenu = document.getElementById("close");

// function menuToggle() {
//     menu.classList.toggle('h-32')
// }

// // Browser resize listener
// window.addEventListener("resize", menuResize);

// // Rezise menu if user changing the width with responsive menu opened
// function menuResize() {
//     // first get the size from the window
//     const window_size = window.innerWidth || document.body.clientWidth;
//     if (window_size > 640){
//         menu.classList.remove('h-32');
//     }
// }
