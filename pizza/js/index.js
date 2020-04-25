

// scroll
let navMobile = document.getElementById('navMobile');
let headerUp = document.querySelector('.wrapper__all .wrapper__header .header__content .header__up');
let menu = document.querySelector('.wrapper__all .wrapper__header .header__content .menu');
let scroll = document.getElementById('btnScroll');

let headerContent = document.querySelector('.wrapper__all .wrapper__header .header__content');
console.log(headerContent.clientHeight);
let header = document.querySelector('.wrapper__all .wrapper__header');
let banner = document.querySelector('.wrapper__all .wrapper__banner');
let up = document.querySelector('.wrapper__all .wrapper__header .nav--mobile .up');

let body = document.body;
let html = document.documentElement;

let prevPos = pageYOffset;
console.log(prevPos);

window.onload = () => {
    scroll.classList.add('active');
    banner.style.paddingTop = header.clientHeight + "px";
}

window.onscroll = function () {
    let curPos = pageYOffset;
    if (curPos < prevPos) {
        scroll.classList.remove('active');
    }
    else {
        scroll.classList.add('active');
    }

    if (prevPos < 15) {
        scroll.classList.add('active');
        banner.style.paddingTop = header.clientHeight + "px";
        header.style.top = 0;
        banner.style.transition = " all 0.2s linear";
        header.style.transition = " all 0.2s linear";
    }
    else {
        banner.style.paddingTop = up.clientHeight + 'px';
        header.style.top = -headerContent.clientHeight + 'px';
    }
    prevPos = curPos;
}
scroll.addEventListener('click', function () {
    body.scrollTop = 0;
    html.scrollTop = 0;
})


