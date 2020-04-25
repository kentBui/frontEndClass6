// click to open nav mobile
var itemmains = document.querySelectorAll('.wrapper__main .nav__mobile .menu-main .item-main .span-main');
var menuSub = document.querySelectorAll('.wrapper__main .nav__mobile .menu-main .item-main .menu-sub');
var itemSubs = document.querySelectorAll('.wrapper__main .nav__mobile .menu-main .item-main .menu-sub .item-sub .span-sub');
var menuSub2s = document.querySelectorAll('.wrapper__main .nav__mobile .menu-main .item-main .menu-sub .item-sub ul');

var bar = document.querySelector('.wrapper__main .nav__mobile .icon--bar .btn-show');
var menuMain = document.querySelector('.wrapper__main .nav__mobile .menu-main');

bar.addEventListener('click', function() {
    menuMain.classList.toggle('active-menu');

})

for (let i = 0; i < itemmains.length; i++) {
    itemmains[i].addEventListener('click', function() {
        itemmains[i].classList.toggle('activeSpan');
        menuSub[i].classList.toggle('active');
    })
}

for (let j = 0; j < itemSubs.length; j++) {
    itemSubs[j].addEventListener('click', function() {
        itemSubs[j].classList.toggle('activeSpan1');
        menuSub2s[j].classList.toggle('active1');
    })
}
// end open nav mobile

// scroll hidden and show
var menu = document.getElementById('navMobile');
var prevPos = window.pageYOffset;
window.onscroll = function() {
    var curPos = window.pageYOffset;
    if (curPos > prevPos) {
        menu.style.top = '-55px';
    } else {
        menu.style.top = 0;
    }
    prevPos = curPos;
}

// end hidden and show nav mobile

// start modal
var modal = document.querySelector('.modal');
var images = document.querySelectorAll('.__images a img');
var image = document.querySelector('.modal .slide-images');
var btnClose = document.querySelector('.modal .slide-images .btn-close');
// create img 
var img = document.createElement('img');
image.appendChild(img);
// click image
for (let k = 0; k < images.length; k++) {
    images[k].addEventListener('click', function() {
        img.src = images[k].src;
        modal.classList.add('active');
    })
}
btnClose.addEventListener('click', function() {
    modal.classList.remove('active');
    img.src = '';
})

// scroll line 
var line = document.querySelector('.wrapper__main .nav__mobile .scroll-line');
var items = document.querySelectorAll('.wrapper__main .nav__mobile .menu-main .item-main');
var width = items[0].clientWidth;
line.style.width = width + "px";
var time = 2;
for (let m = 0; m < items.length; m++) {
    items[m].addEventListener('mouseover', function() {
        line.style.width = items[m].clientWidth + 'px';
        line.style.left = items[m].offsetLeft + 'px';
    })
}
menu.addEventListener('mouseout', function() {
    line.style.left = 0;
    line.style.transition = "all 0.6s ease";
})