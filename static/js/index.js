window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {

    // Check for click events on the navbar burger icon
    window.onload = function() {
        // Show all GIFs after they are fully loaded
        $('img').css('visibility', 'visible');
    };

    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();

})
