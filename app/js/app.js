import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import Swiper from 'swiper';

require('~/app/libs/fontawesome/all.js')
require('~/app/libs/selectric/jquery.selectric.js')
require('~/app/libs/slick/slick.js')

document.addEventListener('DOMContentLoaded', () => {

    // Selects
    $('.select-lang').selectric();
    $('.input-select').selectric().on('change', function() {
        let placeholder = $('.selectric-input-select .selectric .label');
        let selected = $('.selectric-items ul li[data-index="0"]');

        if (selected.hasClass('selected')) {
            placeholder.addClass('active');
        }
    });

    // Slider Products
    const swiperProducts = new Swiper('.products-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: '.products-slider-next',
            prevEl: '.products-slider-prev',
        },
        breakpoints: {
            // when window width is >= 992px
            992: {
                slidesPerView: 1
            },
            // when window width is >= 1367
            1367: {
                slidesPerView: 4
            }
        }
    });

    // Slider Testimonials
    const swiperTestimonials = new Swiper('.testimonials-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        autoHeight: true,

        // Navigation arrows
        navigation: {
            nextEl: '.testimonials-slider-next',
            prevEl: '.testimonials-slider-prev',
        },
    });

    // Slider Team
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 300,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        speed: 300,
        centerMode: true,
        centerPadding: '0',
        adaptiveHeight: true,
        prevArrow: $('.slick-arrow-prev'),
        nextArrow: $('.slick-arrow-next'),
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // Activate slide
    $('.activate-slide').on('click', function () {
       $('.slide-section').addClass('slide');
       $('#select-lang').addClass('dark-theme');
    });

    $(document).on('scroll', function () {
        if($(window).scrollTop() === 0) {
            $('.slide-section').removeClass('slide');
            $('#select-lang').removeClass('dark-theme');
            $('.scroll-up').addClass('hide')
        } else {
            $('.scroll-up').removeClass('hide')
        }
    })

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
    if ($(window).width() > 992) {
        splash.onwheel = onMouseWheel;
    }

    // Youtube video play
    $('.video-play-btn').on('click', function(e) {
        e.preventDefault();
        $('.swiper-slide-active .video-iframe')[0].src += "?autoplay=1";
        $('.video-cover-before').show();
        setTimeout(function(){
                $('.video-cover-before').hide();
            }, 1000
        );
        $('.video-play-btn').hide();
    })

    // Scroll nav
    $('.about-us-link').on('click', function(e) {
        $('.slide-section').addClass('slide');
        $('html, body').animate({
            scrollTop: $("#slide").offset().top + 1
        }, 700);
    });
    $('.homepage-link').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 700);
    });
    $('.footer-link').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $("#contacts").offset().top
        }, 700);
    });
    $('.products-link').on('click', function(e) {
        $('.slide-section').addClass('slide');
        $('html, body').animate({
            scrollTop: $("#products").offset().top
        }, 700);
    });
    $('.scroll-up').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 700);
    });

    // Header add class on scroll
    let header = $('.main-header');
    let langSelect = $('#select-lang');
    let triggerSection = $('#products').offset().top;

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= triggerSection) {
            header.addClass('dark-space');
            langSelect.addClass('white-theme');
        } else {
            header.removeClass('dark-space');
            langSelect.removeClass('white-theme');
        }
    });

    // Mobile header nav
    $('.mobile-toggle').on('click', function () {
       $(this).toggleClass('active');
       $('.main-header__nav').toggleClass('active');
    });
})
