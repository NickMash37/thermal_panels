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
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
})