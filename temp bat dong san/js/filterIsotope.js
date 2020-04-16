// filter with isotope
$(document).ready(function () {
    // isotope
    var $grid = $('.content-grid').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.filter button').on('click', function () {
        var value = $(this).attr('data-filter');
        console.log(value);
        $grid.isotope({
            filter: value
        });
    })
});
// active button
let btnFilter = document.querySelectorAll('.wrapper-all .wrapper__main .main__mid .plan__title .filter .style-filter');
for (let i = 0; i < btnFilter.length; i++) {
    btnFilter[i].addEventListener('click', function () {
        let activeBtn = document.querySelector('.wrapper-all .wrapper__main .main__mid .plan__title .filter .style-filter.active');
        if (activeBtn) {
            activeBtn.classList.remove('active');
        }
        btnFilter[i].classList.add('active');
    })
}