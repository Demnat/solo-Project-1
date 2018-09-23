'use strict';

function toggleMenu(visible) {
    document.querySelector('.leftColumn').classList.toggle('showNavbars', visible)
}

//   document.querySelector('.rwdNav__header-hamburger').addEventListener('click', function(e) {
//     e.preventDefault();
//     toggleMenu()
// });

document.getElementById("hambuger").addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});

document.getElementById("modalAddLinks").addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementsByClassName('index__modal--addLinks')[0].style.display = 'flex';
});

document.getElementsByClassName("close")[0].addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementsByClassName('index__modal--addLinks')[0].style.display = 'none';
});


