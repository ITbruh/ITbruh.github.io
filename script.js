const menuHovers = document.querySelectorAll('.menuHover')

menuHovers.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('activeHover')
    })
    item.addEventListener('mouseout', () => {
        item.classList.remove('activeHover')
    })
})

const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');
const menuClose = document.querySelector('.cross');


menuIcon.addEventListener('click', () => {
    menuItems.classList.add('show');
});

menuClose.addEventListener('click', () => {
    menuItems.classList.remove('show');
});