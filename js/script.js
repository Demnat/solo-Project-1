'use strict';

function toggleMenu(visible) {
    document.querySelector('.leftColumn').classList.toggle('showNavbars', visible)
}

//   document.querySelector('.rwdNav__header-hamburger').addEventListener('click', function(e) {
//     e.preventDefault();
//     toggleMenu()
// });

document.getElementById("hambuger").addEventListener('click', function() {toggleMenu();});
