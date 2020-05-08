"use strict";

const movies = document.querySelector('#movies');
const tvshows = document.querySelector('#tvshows');
const games = document.querySelector('#games');
const shoppingCart = document.querySelector('.shopping-cart');
const draggablesDiv = document.querySelectorAll('.draggable-div');

const dragStartf = () => {
    focusSC(true);
}

const dragEndf = () => {
    focusSC(false);
}

movies.addEventListener("click", () => { console.log("Moovies"); });
tvshows.addEventListener("click", () => { console.log("tvshows"); });
games.addEventListener("click", () => { console.log("games"); });
shoppingCart.addEventListener("click", () => { console.log("shoping c"); });
draggablesDiv.forEach( (dragableDiv, currentIndex, listObj) => { 
        dragableDiv.addEventListener("dragstart", dragStartf);
        dragableDiv.addEventListener("dragend", dragEndf);
        
    }
);

const focusSC = (isFocus) => {
    let allExcepSc = document.querySelectorAll('nav, header, .draggable-div, .menu-categories');
    if (isFocus) {
        allExcepSc.forEach( (currentValue, currentIndex, listObj) => { 
            currentValue.classList.add('opac');
            shoppingCart.classList.add('hovered-shopping-cart');
        });
    } else {
        allExcepSc.forEach( (currentValue, currentIndex, listObj) => { 
            currentValue.classList.remove('opac');
            shoppingCart.classList.remove('hovered-shopping-cart');
        });
        
    }
}