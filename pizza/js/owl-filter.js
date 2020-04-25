
// filter 

// let filterItem = document.querySelectorAll('.filter .filter-item')


// for (let i = 0; i < filterItem.length; i++) {
//     filterItem[i].addEventListener('click', function () {
//         let activeItemFilter = document.querySelector('.filter .filter-item.active');
//         activeItemFilter.classList.remove('active');
//         filterItem[i].classList.add('active');
//         itemProducts(filterItem[i]);
//     })
// }

// function itemProducts(item) {
//     let items = document.querySelectorAll('.wrapper__all .wrapper__main .prodducts-us .product-items .product-item');
//     let value = item.getAttribute('data-name');
//     for (let j = 0; j < items.length; j++) {
//         if (items[j].matches(value)) {
//             items[j].style.display = 'block';
//             console.log(items[j]);
//         }
//         else {
//             items[j].style.display = '';
//         }
//     }
// }
// let activeItemFilter = document.querySelector('.filter .filter-item.active');
// itemProducts(activeItemFilter);

// owl

$(document).ready(function () {
    var owlHeader = $("#slide-header");
    owlHeader.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: false
    });

    var owl = $(".product-item");
    owl.owlCarousel({
        items: 1,
        loop: false,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 4
            }
        }
    });

    var $grid = $('.product-items').isotope({
        // options
        itemSelector: '.product-item',
        layoutMode: 'fitRows'
    });

    if ($('.filter div').first().hasClass('active')) {
        console.log(111);
        $grid.isotope({
            filter: '.burgers'
        });
    }
    $('.filter div').on('click', function () {
        var value = $(this).attr('data-name');
        console.log(value);
        $grid.isotope({
            filter: value
        });
    })

    var owlCustommer = $("#slide-custommer");
    owlCustommer.owlCarousel({
        items: 2,
        loop: true,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            }
        }
    });
});