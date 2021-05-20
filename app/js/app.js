import $ from 'jquery';

window.jQuery = $;
window.$ = $;
import Swiper from 'swiper';
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';

require('~/app/libs/fontawesome/all.js');
require('~/app/libs/selectric/jquery.selectric.js');
require('~/app/libs/slick/slick.js');

document.addEventListener('DOMContentLoaded', () => {

    // Gallery
    lightGallery(document.getElementById('gallery'), {
        download: false,
    });
    lightGallery(document.getElementById('product-videos'), {
        plugins: [lgVideo],
        preload: false,
        autoplayFirstVideo: true,
        download: false,
    });
    $('.next-item-black').after('<div class="dark-item"></div>');
    $('.next-2item-black').after('<div class="dark-item2x"></div>');
    $('.dark-item2x').after('<div class="dark-item"></div>');
    $('.gallery-list').append('' +
        '<div class="gallery-item gallery-item--load-more">\n' +
        '        <div class="arrow-next">\n' +
        '          <i class="fas fa-arrow-right"></i>\n' +
        '        </div>\n' +
        '      </div>'
    );


    // Selects
    $('.select-lang').selectric();
    $('.input-select').selectric().on('change', function () {
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
                slidesPerView: 3
            },
            // when window width is >= 1367
            1367: {
                slidesPerView: 4
            }
        }
    });

    // Slider Product Videos
    $('.product-videos-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        prevArrow: $('.products-slider-prev'),
        nextArrow: $('.products-slider-next'),
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
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

    // Slider Packages mobile
    if ($(window).width() < 768) {
        $('.packages-list__col-lg__row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '90px',
            adaptiveHeight: true,
        });
    }

    // Slider Team
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
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

    // Youtube video play
    $('.video-play-btn').on('click', function (e) {
        e.preventDefault();
        $('.swiper-slide-active .video-iframe')[0].src += "?autoplay=1";
        $('.video-cover-before').show();
        setTimeout(function () {
                $('.video-cover-before').hide();
            }, 1000
        );
        $('.video-play-btn').hide();
    })



    // Mobile header nav
    $('.mobile-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.main-header__nav').toggleClass('active');
        $('body').toggleClass('hidden');
    });

    $('.main-nav__link').on('click', function () {
        $('.mobile-toggle').removeClass('active');
        $('.main-header__nav').removeClass('active');
        $('body').removeClass('hidden');
    });


    // Activate slide
    $('.activate-slide').on('click', function () {
        $('.slide-section').addClass('slide');
        $('#select-lang').addClass('dark-theme');
    });

    $(document).on('scroll', function () {
        if ($(window).scrollTop() === 0) {
            $('.slide-section').removeClass('slide');
            $('#select-lang').removeClass('dark-theme');
            $('.scroll-up').addClass('hide')
        } else {
            $('.scroll-up').removeClass('hide')
        }
    })


    $('.scroll-up').on('click', function (e) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 700);
    });
})
