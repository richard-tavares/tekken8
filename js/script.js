$(document).ready(() => {
    'use strict';

    var preloaderVisible = true;

    setTimeout(function () {
        preloaderVisible = false;
        hidePreloader();
    }, 3000);

    $(window).on('load', function () {
        hidePreloader();
    });

    function hidePreloader() {
        if (!preloaderVisible) {
            $('.preloader').fadeOut('slow');
        }
    }
});