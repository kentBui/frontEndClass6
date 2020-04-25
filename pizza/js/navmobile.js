// nav-mobile

let bar = document.querySelector('.wrapper__all .wrapper__header .nav--mobile .up i');
let navBar = document.querySelector('.wrapper__all .wrapper__header .nav--mobile .nav-bar');
let plusMain = document.querySelectorAll('.wrapper__all .wrapper__header .nav--mobile .nav-bar .m__item .up-main span');
let mainMenu = document.querySelectorAll('.wrapper__all .wrapper__header .nav--mobile .nav-bar .m__item .main-menu');
let plusSub = document.querySelectorAll('.wrapper__all .wrapper__header .nav--mobile .nav-bar .m__item .main-menu .main-product .up-sub span');
let subMenu = document.querySelectorAll('.wrapper__all .wrapper__header .nav--mobile .nav-bar .m__item .main-menu .main-product .sub-menu');


bar.addEventListener('click', function () {
    navBar.classList.toggle('active');
})


for (let i = 0; i < plusMain.length; i++) {
    plusMain[i].addEventListener('click', function () {
        mainMenu[i].classList.toggle('activeMain');
        plusMain[i].classList.toggle('activeSpanMain');
    })
}

for (let i = 0; i < plusSub.length; i++) {
    plusSub[i].addEventListener('click', function () {
        subMenu[i].classList.toggle('activeSub');
        plusSub[i].classList.toggle('activeSpanSub');
    })
}