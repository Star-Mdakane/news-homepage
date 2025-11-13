const closeMenuBtn = document.getElementById('close');
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild('overlay');

const openMenu = () => {
    menu.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

const closeMenu = () => {
    menu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = ' ';
}

burger.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
  }

