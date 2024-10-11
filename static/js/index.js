window.HELP_IMPROVE_VIDEOJS = false;

window.onload = function() {
    // 找到所有 GIF 文件并重新设置它们的 src
    document.querySelectorAll('img[src$=".gif"]').forEach(function(img) {
        let src = img.getAttribute('src');
        img.setAttribute('src', '');  // 先清除 src
        img.setAttribute('src', src); // 再重新设置为原始 src，触发重新加载
    });
};

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
