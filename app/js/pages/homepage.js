document.addEventListener('DOMContentLoaded', () => {

    // Header add class on scroll
    let header = $('.main-header');
    let langSelect = $('#select-lang');
    let triggerSection = $('#products').offset().top;

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        if (scroll >= triggerSection) {
            header.addClass('dark-space');
            langSelect.addClass('white-theme');
        } else {
            header.removeClass('dark-space');
            langSelect.removeClass('white-theme');
        }
    });


    // Scroll nav
    if ($(window).width() < 992) {
        $('.activate-slide').on('click', function (e) {
            $('html, body').animate({
                scrollTop: $("#slide").offset().top - 90
            }, 700);
        });
    }
    if ($(window).width() < 376) {
        $('.activate-slide').on('click', function (e) {
            $('html, body').animate({
                scrollTop: $("#slide").offset().top - 50
            }, 700);
        });
    }

    $('.about-us-link').on('click', function (e) {
        $('.slide-section').addClass('slide');

        if ($(window).width() > 992) {
            $('html, body').animate({
                scrollTop: $("#slide").offset().top + 1
            }, 700);
        } else {
            $('html, body').animate({
                scrollTop: $("#slide").offset().top - 90
            }, 700);
        }
    });

    $('.homepage-link').on('click', function (e) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 700);
    });

    $('.footer-link').on('click', function (e) {
        if ($(window).width() > 992) {
            $('html, body').animate({
                scrollTop: $("#contacts").offset().top
            }, 700);
        } else {
            $('html, body').animate({
                scrollTop: $("#contacts").offset().top - 90
            }, 700);
        }
    });

    $('.products-link').on('click', function (e) {
        $('.slide-section').addClass('slide');
        if ($(window).width() > 992) {
            $('html, body').animate({
                scrollTop: $("#products").offset().top
            }, 700);
        } else {
            $('html, body').animate({
                scrollTop: $("#products").offset().top - 90
            }, 700);
        }
    });

    // Home page splash animation
    const splash = document.getElementById('splash');

    function onMouseWheel(event) {
        event.preventDefault();
        const slide = document.getElementById('slide');
        const lang = document.getElementById('select-lang');

        slide.classList.add('slide');

        if ($(window).width() < 1600) {
            lang.classList.add('dark-theme');
        }
    }

    splash.onwheel = onMouseWheel;
});