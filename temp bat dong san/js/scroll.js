// handle when scroll
let body = document.body;
let ele = document.documentElement;

let btnScroll = document.getElementById('scroll-2-top');
let header = document.getElementById('header');

let prevPos = window.pageYOffset;

window.onload = function btnAtTop() {
    btnScroll.style.opacity = 0;
}
console.log(prevPos);
if (prevPos < 10) {
    btnScroll.style.opacity = 0;
}
window.onscroll = function () {
    let curPos = window.pageYOffset;
    if (curPos > prevPos) {
        btnScroll.style.opacity = 0;
        btnScroll.style.transition = "all 0.4s ease";
        header.style.display = "none";
    }
    else {
        btnScroll.style.opacity = 1;
        btnScroll.style.transition = "all 0.4s ease";
        header.style.display = "";
    }
    prevPos = curPos;
    if (curPos > 80) {
        if (window.innerWidth > 830) {
            header.style.top = "-35px";
            console.log(222);
        }
        else {
            header.style.top = 0;
        }
        header.style.transition = "all 0.4s ease";
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
        header.style.top = 0;
        header.style.transition = "all 0.4s ease";
    }
}
btnScroll.addEventListener('click', function () {
    body.scrollTop = 0;
    ele.scrollTop = 0;
})
