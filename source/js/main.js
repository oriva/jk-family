// @codekit-prepend "mouse-wheel.js";
$(document).ready(function () {
    $(".js-news-carousel").owlCarousel({
        margin: 40
    });
    const headOwl = $('.js-header-carousel').owlCarousel({
        items: 1,
        loop: true
    });
    $('.header-banner__arrow-left').on('click', function () {
        headOwl.trigger('prev.owl.carousel')
    });
    $('.header-banner__arrow-right').on('click', function () {
        headOwl.trigger('next.owl.carousel');
    });

    const stageOwl = $('.js-stage-carousel').owlCarousel({
        items: 2,
        margin: 40
    });
    $('.owl-stages-arrow__left').on('click', function () {
        stageOwl.trigger('prev.owl.carousel')
    });
    $('.owl-stages-arrow__right').on('click', function () {
        stageOwl.trigger('next.owl.carousel');
    });
});

$(document).on('click', function (e) {
    var tg = $(e.target);
    if (tg.closest('.js-filter-checkbox')) {
        tg.closest('.js-filter-checkbox').toggleClass('checked');
        tg.closest('.js-filter-checkbox').find('input').prop('checked', !$(e).find('input').is('checked'));
    }
});

$('.burger__button').on('click', function (e) {
    $(this).toggleClass('burger__button_open');
});

// scroll for header
function getPosMenu () {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 0) {
        $('.header').addClass('header_scroll');
    } else {
        $('.header').removeClass('header_scroll');
    }
};

$(window).mousewheel(function (e) {
    // if (e.deltaY > 0) {
    //     $('.header').removeClass('header_up')
    // } else if (e.deltaY < 0) {
    //     $('.header').addClass('header_up')
    // }
    getPosMenu();
});
