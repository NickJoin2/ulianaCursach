const menu = document.querySelector('.header__menu')
const openBtn = document.querySelector('#headerMenuOpen')
const closeBtn = document.querySelector('#headerMenuClose')

openBtn.addEventListener('click', () => {
    menu.classList.add('header__open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__open')
})