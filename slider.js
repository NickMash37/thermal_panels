jQuery(document).ready(($) => {
    $('.slider').owlCarousel({
        items: 5,
        margin: 10,
        nav: true,
        loop: true,
        dots: true,
        responsive: {
            items: 2
        }
    });
})