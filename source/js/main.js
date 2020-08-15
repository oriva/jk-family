$(document).ready(function () {
    $(".js-news-carousel").owlCarousel({
        margin: 40
    });
    $('.js-stage-carousel').owlCarousel({
        items: 2,
        margin: 40
    });
});

$(document).on('click', function (e) {
    var tg = $(e.target);
    if (tg.closest('.js-filter-checkbox')) {
        tg.closest('.js-filter-checkbox').toggleClass('checked');
        tg.closest('.js-filter-checkbox').find('input').prop('checked', !$(e).find('input').is('checked'));
    }
});