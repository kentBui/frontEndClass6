
// start modal image
var modal = document.querySelector('.modal');
var image = document.querySelector('.modal .imageShow');
var close = document.querySelector('.modal .close');

close.addEventListener('click', function () {
    modal.style.display = 'none';

});

var imgOrigins = document.querySelectorAll('.image .img-box .imgOrigin');
var btnicons = document.querySelectorAll('.image .img-box .icon');
for (let i = 0; i < btnicons.length; i++) {
    btnicons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        image.src = imgOrigins[i].src;
    })
}

// create auto slide 
var count = 0;
showSlide();

function showSlide() {
    let images = document.querySelectorAll('.mainRow .row__gift .gift__slide img');
    let slide = document.querySelector('.mainRow .row__gift .gift__slide');
    let size = images[0].clientWidth;
    count++;
    slide.style.transition = 'all 0.5s ease-out';
    if (count > 3) {
        count = 0;
    }
    slide.style.transform = 'translateX(' + (-size * count) + 'px)';
    setTimeout(showSlide, 3000);
}


// click director link button menu mobile
var mobileNav = document.querySelector('.mainRow .row__menu .nav__bar .mobile--nav');
var menuNav = document.querySelector('.mainRow .row__menu .nav__bar .menu--nav')
var listLinkMenu = document.querySelectorAll('.mainRow .row__menu .nav__bar .menu--nav ul li a');
mobileNav.addEventListener('click', () => {
    menuNav.classList.toggle('active1');
})

for (let i = 0; i < listLinkMenu.length; i++) {
    listLinkMenu[i].addEventListener('click', () => {
        menuNav.classList.remove('active1');
    })
}