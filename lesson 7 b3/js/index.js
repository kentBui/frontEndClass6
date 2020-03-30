document.addEventListener('DOMContentLoaded', function(){
    let items = document.querySelectorAll('main .container .wraper .wraper__left ul .item');
    let contents = document.querySelectorAll('main .container .wraper .wraper__right ul .content');
    for(let i = 0; i < items.length; i++){
        items[i].addEventListener('click', function(){
            let itemActive = document.querySelector('main .container .wraper .wraper__left ul .active');
            let contentActive = document.querySelector('main .container .wraper .wraper__right ul .activeContent');
            itemActive.classList.remove('active');
            items[i].classList.add('active');
            contentActive.classList.remove('activeContent');
            contents[i].classList.add('activeContent');
        });
    }

    let pushBar = document.querySelector('header .r__banner .container .menu .menuMobile .push--bar');
    pushBar.addEventListener('click',function(){
        let openBar = document.querySelector('header .r__banner .container .menu .menuMobile .open--bar');
        let activeBar = document.querySelector('header .r__banner .container .menu .menuMobile .active--bar');
        
        openBar.classList.add('active--bar');
        activeBar.classList.remove('active--bar');
        
    });
});