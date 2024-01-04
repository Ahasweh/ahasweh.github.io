
const menu=document.querySelector('#menuButton');
menu.onclick= openMenu;

function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

