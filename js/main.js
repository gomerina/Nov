$(document).ready(function () {
    var tariffSlider = new Swiper(".tariff-slider", {
        spaceBetween: 1,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            660: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    var offersSlider = new Swiper(".offers-slider", {
        spaceBetween: 24,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 800,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 1.1,
            },
            440: {
                slidesPerView: 2,
            },
            620: {
                slidesPerView: 2.5,
            },
            1025: {
                slidesPerView: 3,
            },
        },
    });
    var filesSlider = new Swiper(".files-slider", {
        spaceBetween: 0,
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 800,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            280: {
                allowTouchMove: true,
                spaceBetween: 16,
            },
            1025: {
                allowTouchMove: false,
                spaceBetween: 0,
            },
        },
    });
    $('.jsTogglerHead').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.jsTogglerBody').slideToggle();
    })

    $('body').on('click', function () {
        $('.custom-select').removeClass('active');
    })

    $('.custom-select').each(function () {
        $(this).click(function (e) {
            e.stopPropagation();
            $(this).toggleClass('active').siblings().removeClass('active');
        })
        $(this).find('.select-menu__item').click(function () {
            $(this).closest('.custom-select').find('.custom-select__value').html($(this).html());
            $(this).closest('.custom-select').find('.custom-select__input').val($(this).html());
            $(this).addClass('hidden').siblings().removeClass('hidden');
        })
    })

    $('#galleryMore').on('click', function () {
        $('.gallery-box').addClass('active');
        $('.gallery-box').removeAttr('style')
        $(this).remove();
    })
    $('#advantagesMore').on('click', function () {
        $('.advantages-box').addClass('active');
        $(this).remove();
    })
    $('.tariff-slider__item').each(function () {
        if ($(this).find('.tariff-list__item').length > 4) {
            $(this).find('.tariff-readmore__box').addClass('active');
        }
    })
    $('body').on('click', '.tariff-list__readmore', function () {
        $(this).toggleClass('active')
        $(this).closest('.tariff-slider__item').find('.tariff-list__item:nth-child(n+5)').toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('Скрыть')
        } else {
            $(this).text('Показать больше')
        }
    })





    tippy('.group-1', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-2', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-3', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-4', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-5', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-6', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-7', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });
    tippy('.group-8', {
        interactive: true,
        allowHTML: true,
        content: `
            <div class="scheme-popup">
                <div class="scheme-popup__name">
                    Места
                </div>
                <div class="scheme-popup__text">
                    10–36 (с окном)
                </div>
                <div class="scheme-popup__name">
                    Стоимость аренды
                </div>
                <div class="scheme-popup__price">
                    22 600 ₽/Мес
                </div>
                <div class="scheme-popup__btn">
                    <a href="#modalScheme" data-fancybox="" class="btn">
                        Подробнее
                    </a>
                </div>
            </div>
        `,
    });

    $('.group-1').mouseenter(function () {
        $('#group-1').addClass('active');
    })
    $('.group-2').mouseenter(function () {
        $('#group-2').addClass('active');
    })
    $('.group-3').mouseenter(function () {
        $('#group-3').addClass('active');
    })
    $('.group-4').mouseenter(function () {
        $('#group-4').addClass('active');
    })
    $('.group-5').mouseenter(function () {
        $('#group-5').addClass('active');
    })
    $('.group-6').mouseenter(function () {
        $('#group-6').addClass('active');
    })
    $('.group-7').mouseenter(function () {
        $('#group-7').addClass('active');
    })
    $('.group-8').mouseenter(function () {
        $('#group-8').addClass('active');
    })


    $('.group-1').mouseout(function () {
        $('#group-1').removeClass('active');
    })
    $('.group-2').mouseout(function () {
        $('#group-2').removeClass('active');
    })
    $('.group-3').mouseout(function () {
        $('#group-3').removeClass('active');
    })
    $('.group-4').mouseout(function () {
        $('#group-4').removeClass('active');
    })
    $('.group-5').mouseout(function () {
        $('#group-5').removeClass('active');
    })
    $('.group-6').mouseout(function () {
        $('#group-6').removeClass('active');
    })
    $('.group-7').mouseout(function () {
        $('#group-7').removeClass('active');
    })
    $('.group-8').mouseout(function () {
        $('#group-8').removeClass('active');
    })

    $('.modal-scheme__btn').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.scheme__btn-text').text('Выбрано')
        } else {
            $('.scheme__btn-text').text('Выбрать')
        }
    })

    function mobScheme() {
        if (window.innerWidth <= 1024) {
            $('.scheme-info').appendTo('.scheme-modal__menu')
            $('.layer').appendTo('.scheme-modal__place')
        } else {
            $('.scheme-info').appendTo('.main-screen__inner')
            $('.layer').appendTo('.main-screen__inner')
        }
    }
    mobScheme();
    $(window).on('resize', function () {
        mobScheme();
    })
    $('.burger').on('click', function () {
        $(this).toggleClass('active');
        $('.header-bottom').toggleClass('active')
    })
    $('[data-fancybox]').fancybox({
        touch: false
    });
    $('.close-modal').on('click', function () {
        $.fancybox.close();
    })

    $('.anchor').click(function () {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top - 200
        }, 600);
    });
})