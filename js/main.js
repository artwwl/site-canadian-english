// box shadow
const header = document.querySelector('header');
window.onscroll = () => {
    if(window.scrollY > 56){
        header.classList.add('scrolled')
    }else{
        header.classList.remove('scrolled');
    }
}


// menu
const menuItems =  document.querySelectorAll('.menu-items');
const iconClose = document.querySelector('.close-icon');
const iconMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

function toggleShowClass(){
    menu.classList.toggle('show');
    body.classList.toggle('of-hidden');
    iconMenu.classList.toggle('show');
}

function closeNav(){
    menu.classList.remove('show');
    body.classList.remove('of-hidden');
    iconMenu.classList.remove('show');
}

iconMenu.onclick = toggleShowClass;

for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener('click', (event) => {
        closeNav();
    })
}


//gallery collapse
const collapseButton = document.querySelectorAll('.collapse-toggle');
const arrow = document.querySelector('.arrow');
const gallery = document.querySelector('.fotos');
const arrowLines = document.querySelectorAll('.arrow-lines');
const seeMoreLessText = document.querySelectorAll('.see-more-less');

function invertText(){
    for(i = 0; i < seeMoreLessText.length; i++){
        seeMoreLessText[i].classList.toggle('show');
    }
}

function moreLessToggle(){
    gallery.classList.toggle('more');

    if (arrow.classList.contains('down')){
        arrow.classList.remove('down');
        arrow.classList.add('up');

        for(i = 0; i < arrowLines.length; i++){
            arrowLines[i].classList.remove('down');
            arrowLines[i].classList.add('up');

        }
        
        invertText();

        
    }else{
        arrow.classList.remove('up');
        arrow.classList.add('down');

        for(i = 0; i < arrowLines.length; i++){
            arrowLines[i].classList.remove('up');
            arrowLines[i].classList.add('down');

        }
        
        invertText();

    }

}

for (let i = 0; i < collapseButton.length; i++){
    collapseButton[i].addEventListener('click', () => { 
        moreLessToggle();
    })
}



