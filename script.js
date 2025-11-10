const closeMenuBtn = document.getElementById('close');
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

const openMenu = () => {
    menu.classList.add('open');
}

const closeMenu = () => {
    menu.classList.remove('open');
}

burger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);