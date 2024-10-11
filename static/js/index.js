window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {
    // Check for click events on the navbar burger icon
$("body").css("visibility", "hidden");

    // Wait until the page fully loads (including GIFs)
    window.onload = function() {
        // Show the content after everything is loaded
        $("body").css("visibility", "visible");

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
    }
})
