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

// =========================
// ======= MODALS ==========
//==========================
// document.getElementById("modalAddLinks").addEventListener('click', function (e) {
//     e.preventDefault();
//     document.getElementsByClassName('index__modal--addLinks')[0].style.display = 'flex';
// });

// document.getElementsByClassName("close")[0].addEventListener('click', function (e) {
//     e.preventDefault();
//     document.getElementsByClassName('index__modal--addLinks')[0].style.display = 'none';
// });

var showModal = function(event) {
    
    event.preventDefault();
    //chowa modale
    var modalsHide = document.querySelectorAll('.modal');
    for(var i = 0; i < modalsHide.length; i++) {
        modalsHide[i].classList.remove('showM');   
    }
    //pokazuje modal-overlay
    document.querySelector('#modal-overlay').classList.add('showM');
    console.log(event); //wyciąga wszystkie info o danym obiekcie 
    //pokazuje modal w zależności od tego, w który button kliknięto
    document.querySelector(event.target.dataset.hash).classList.add('showM');

};

// stosujemy kod dla wielu linków	
var modalLinks = document.querySelectorAll('.show-modal');
for (var i = 0; i < modalLinks.length; i++) {
      modalLinks[i].addEventListener('click', showModal);
}

// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 
var hideModal = function(event) {
      event.preventDefault();
      document.querySelector('#modal-overlay').classList.remove('showM');
};

var closeButtons = document.querySelectorAll('.modal .close');
for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', hideModal);
}

// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
document.querySelector('#modal-overlay').addEventListener('click', hideModal);

// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
var modals = document.querySelectorAll('.modal');
for (var i = 0; i < modals.length; i++) {	  
modals[i].addEventListener('click', function(event) {
            event.stopPropagation();
      });
}