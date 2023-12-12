jQuery(document).ready(($) => {
    $('.slider').owlCarousel({
        items: 4,
        margin: 10,
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
})

// Main image slider

jQuery(document).ready(($) => {
    $('.image-slider').owlCarousel({
        items: 1,
        margin: 0,
        nav: false,
        loop: true,
        dost: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 500
    })
})