const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.mobile-menu')
const firstLevelMenuItem = document.querySelectorAll('.mobile-item')
const secondLevelMenu = document.querySelectorAll('.second-level-menu')
const faqHeader = document.querySelectorAll('.faq-header')
const faqText = document.querySelectorAll('.faq-text')
const faqItem = document.querySelectorAll('.faq-items__item')
const caretDown = document.querySelectorAll('.fa-caret-down')

console.log(caretDown);

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

// firstLevelMenuItem.forEach((item, idx) => {
//     console.log(item, idx)
// })
// secondLevelMenu.forEach((item, idx) => {
//     console.log(item, idx)
// })