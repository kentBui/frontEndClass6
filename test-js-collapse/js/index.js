document.addEventListener("DOMContentLoaded",function(){
    let items = document.querySelectorAll('.wrapper header ul .item');
    let item1s = document.querySelectorAll('.wrapper main ul .item1');
    for(let i =0; i<items.length;i++){
        items[i].addEventListener('click', function(){
            let activeItem = document.querySelector('.wrapper header ul .active');
            activeItem.classList.remove('active');
            items[i].classList.add('active');
            let activeitem1 = document.querySelector('.wrapper main ul .active1');
            activeitem1.classList.remove('active1');
            item1s[i].classList.add('active1');
        });
    }
});