const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const firstLevelMenuItem = document.querySelectorAll('.mobile-item')
const caretDown = document.querySelectorAll('.fa-caret-down')

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