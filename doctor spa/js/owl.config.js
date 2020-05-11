$(document).ready(function () {
    var owl = $(".banner");
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: false
    });
    var owl1 = $(".about__slide");
    owl1.owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: true
    });
});