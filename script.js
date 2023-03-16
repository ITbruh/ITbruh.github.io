const menuHovers = document.querySelectorAll('.menuHover')

menuHovers.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('activeHover')
    })
    item.addEventListener('mouseout', () => {
        item.classList.remove('activeHover')
    })
})

const button = document.querySelector('.getPriceBtn')
const block = document.querySelector('.getprice__block')
const call = document.querySelector('.call')


button.addEventListener('click', function () {
    block.scrollIntoView({
        behavior: 'smooth'
    });
});

call.addEventListener('click', function () {
    block.scrollIntoView({
        behavior: 'smooth'
    });
});