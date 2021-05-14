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

    // Slider Products
    const swiperProducts = new Swiper('.products-slider', {
        // Optional parameters
        loop: true,
        slidesPerView: 4,

        // Navigation arrows
        navigation: {
            nextEl: '.products-slider-next',
            prevEl: '.products-slider-prev',
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
        prevArrow: $('.slick-arrow-prev'),
        nextArrow: $('.slick-arrow-next'),
        focusOnSelect: true
    });


    // Activate slide
    $('.activate-slide').on('click', function () {
       $('.slide-section').addClass('slide');
    });

    $(document).on('scroll', function () {
        if($(window).scrollTop() === 0) {
            $('.slide-section').removeClass('slide');
        }
    })

    const splash = document.getElementById('splash');

    function onMouseWheel(event) {
        event.preventDefault();
        const slide = document.getElementById('slide');

        slide.classList.add('slide');
    }
    splash.onwheel = onMouseWheel;
})
