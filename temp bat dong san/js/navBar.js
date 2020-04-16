
// slide nav bar
// chevon - right
let chevonRightMain = document.querySelectorAll('.nav-mobile .base .nav-menu .main-menu .item .chevon-right-main');
let chevonRightSub = document.querySelectorAll('.nav-mobile .base .nav-menu .main-menu .item .sub-menu .item-sub .chevon-right-sub');
// list ul
let mainMenu = document.querySelector('.nav-mobile .base .nav-menu .main-menu');
let subMenu = document.querySelectorAll('.nav-mobile .base .nav-menu .main-menu .item .sub-menu');
let childMenu = document.querySelectorAll('.nav-mobile .base .nav-menu .main-menu .item .sub-menu .item-sub .child-menu');
// chevon - left
let chevonLeftMain = document.querySelector('.nav-mobile .base .nav-up .chevon-left-main');
let chevonLeftSub = document.querySelector('.nav-mobile .base .nav-up .chevon-left-sub')
// btn - close - open
let btnClose = document.getElementById('btnClose');
let btnOpen = document.querySelector('.wrapper-all .wrapper__header .nav__menu .btn-open-menu');
// menu 
let navMobile = document.getElementById('navMobile');
// container
let container = document.querySelector('.wrapper-all')
// event chevon right main click
for (let i = 0; i < chevonRightMain.length; i++) {
    chevonRightMain[i].addEventListener('click', function () {
        let activeSub = document.querySelector('.active-sub');
        if (activeSub) {
            activeSub.classList.remove('active-sub');
        }
        mainMenu.style.left = "-100%";
        subMenu[i].classList.add('active-sub');
        chevonLeftMain.classList.add('active');
    })
}
// event chevon right sub click
for (let i = 0; i < chevonRightSub.length; i++) {
    chevonRightSub[i].addEventListener('click', function () {
        let activeChild = document.querySelector('.active-child');
        if (activeChild) {
            activeChild.classList.remove('active-child');
        }
        mainMenu.style.left = "-200%";
        childMenu[i].classList.add('active-child');

        chevonLeftMain.classList.remove('active');
        chevonLeftSub.classList.add('active')
    })
}
// event chevon left main click
chevonLeftMain.addEventListener('click', function () {
    mainMenu.style.left = 0;
    chevonLeftMain.classList.remove('active');
})
chevonLeftSub.addEventListener('click', function () {
    mainMenu.style.left = "-100%";
    chevonLeftMain.classList.add('active');
    chevonLeftSub.classList.remove('active')
})
// open

let layer = document.querySelector('.wrapper-all .layer')
btnOpen.addEventListener('click', function () {
    navMobile.style.width = "300px";
    container.style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)"
    setTimeout(() => {
        layer.classList.add('layer1');
    }, 500)

})
btnClose.addEventListener('click', function () {
    navMobile.style.width = 0;
    container.style.marginLeft = 0;
    document.body.style.backgroundColor = ""
    layer.classList.remove('layer1');
    // config nav bar ve vi tri cu
    mainMenu.style.left = 0;
    chevonLeftMain.classList.remove('active');
    chevonLeftSub.classList.remove('active')
})

window.onclick = function (event) {
    if (event.target.matches('.layer1')) {
        navMobile.style.width = 0;
        container.style.marginLeft = 0;
        document.body.style.backgroundColor = ""
        layer.classList.remove('layer1');
        // config nav bar ve vi tri cu
        mainMenu.style.left = 0;
        chevonLeftMain.classList.remove('active');
        chevonLeftSub.classList.remove('active')
    }
}