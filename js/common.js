$(document).ready(function() {
    init_btn();
    init_contactBanner();
});

function init_btn() {
    $('.onayamiBtn').click(function(e) {
        var id = $(this).data('link');
        e.preventDefault();
        e.stopPropagation();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#" + id).offset().top
        }, 1000);
    });
    $('.to_up').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#header").offset().top
        }, 1000);
    });
}

$(window).scroll(function() {
    init_contactBanner();
});

function init_contactBanner() {
    if($(window).scrollTop() > 200) {
        $('#contactBanner').fadeIn();
    } else {
        $('#contactBanner').fadeOut();
    }
}