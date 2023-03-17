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
