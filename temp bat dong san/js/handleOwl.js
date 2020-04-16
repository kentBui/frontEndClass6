$(document).ready(function () {
    // Handler for .ready() called.
    // slide main

    var owlMain = $('#slide-main');
    owlMain.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
        autoplay: true,
        smartSpeed: 450,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false
    });

    var owlContent = $('#slide-content');
    owlContent.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false
    });

    var owlIdea = $('#slide-down');
    owlIdea.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false
    });

});
