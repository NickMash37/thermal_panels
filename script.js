const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const firstLevelMenuItem = document.querySelectorAll('.mobile-item')
const caretDown = document.querySelectorAll('.fa-caret-down')
const btnClose = document.querySelector('.popup-text__btn')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

firstLevelMenuItem.forEach((item) => {
    if(item) {
        item.addEventListener('click', (event) => {
            event.target.classList.toggle('active-link')
            event.target.nextElementSibling.classList.toggle('visible');
        })
    }
})

btnClose.addEventListener('click', () => {
    overlay.classList.add('disabled')
    popup.classList.add('disabled')
})

setTimeout(() => {
    overlay.classList.remove('disabled');
    popup.classList.remove('disabled');
}, 60000)