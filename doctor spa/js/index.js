

let bar = document.querySelector('.wrapper .wrapper__header .h__content .bars');
let mobileMenu = document.querySelector('.wrapper .wrapper__header .h__content .menu__mobile');
let overlay = document.querySelector('.wrapper .overlay');

let subClick = document.querySelectorAll('.wrapper .wrapper__header .h__content .menu__mobile .main__menu .item .sub-click');
let secondClick = document.querySelectorAll('.wrapper .wrapper__header .h__content .menu__mobile .main__menu .item .second-click');


let subMenu = document.querySelectorAll('.wrapper .wrapper__header .h__content .menu__mobile .main__menu .item .sub__menu');
let secondMenu = document.querySelectorAll('.wrapper .wrapper__header .h__content .menu__mobile .main__menu .item .sub__menu .sub-item .second__menu');

for (let i = 0; i < subClick.length; i++) {
    subClick[i].addEventListener('click', function () {
        subMenu[i].classList.toggle('active-sub');
        subClick[i].classList.toggle('active-click');
    })
}

for (let i = 0; i < secondClick.length; i++) {
    secondClick[i].addEventListener('click', function () {
        secondMenu[i].classList.toggle('active-second');
        secondClick[i].classList.toggle('active-click');
    })
}

bar.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
})

let openModal = document.querySelector('.wrapper .wrapper__header .h__content .advisory');
let closeModal = document.querySelector('.wrapper .modal .content .modal__header span i');

let modal = document.querySelector('.wrapper .modal');
let content = document.querySelector('.wrapper .modal .content');

openModal.addEventListener('click', open)
closeModal.addEventListener('click', close)

window.onclick = function (e) {
    if (e.target.matches('#advisory')) {
        close();
        console.log(222);
    }
    if (e.target.matches('.overlay')) {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
    else return;
}

function open() {
    modal.classList.add('active-modal');
    setTimeout(function () {
        content.classList.add('active-content');
    }, 100);
}

function close() {
    content.classList.remove('active-content');
    setTimeout(function () {
        modal.classList.remove('active-modal');
    }, 600);
}