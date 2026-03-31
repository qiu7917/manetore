$(function () {

    /*=================================================
    Slick
    ===================================================*/
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '<div class="slide-arrow prev-arrow"></div>',
        nextArrow: '<div class="slide-arrow next-arrow"></div>',
        dots: false,
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 1,
    });


    /*=================================================
    アコーディオンメニュー
    ===================================================*/
    $('.accordion-header').on('click', function () {
        var $header = $(this);
        var $content = $header.next('.accordion-content');
        var $item = $header.closest('.accordion-item');
        var $slider = $header.closest('.slick-slider');

        if ($header.hasClass('is-active')) {
            $header.removeClass('is-active');
            $content.stop().slideUp(400, function () {
                if ($slider.length) {
                    $slider.slick('setPosition');
                }
            });
        } else {
            $header.addClass('is-active');
            $content.stop().slideDown(400, function () {
                if ($slider.length) {
                    $slider.slick('setPosition');
                }
                var $iframe = $content.find('iframe');
                if ($iframe.length && !$iframe.attr('src')) {
                    $iframe.attr('src', $iframe.data('src'));
                }
            });
        }
    });

    $('.accordion-content img').on('click', function () {
        $(this).closest('.accordion-content').prev('.accordion-header').trigger('click');
    });



    /*=================================================
    fixedbtn
    ===================================================*/

    $(function () {
        let cta = $(".fixedbtn");
        cta.hide();

        $(window).scroll(function () {
            let scrollThreshold = 400;
            if ($(window).scrollTop() > scrollThreshold) {
                cta.fadeIn();
            } else {
                cta.fadeOut();
            }
        });
    });

    $(window).on("scroll resize", function () {
        if (window.innerWidth <= 768) {
            let ctaHeight = $(".fixedbtn").outerHeight();
            ($(".fixedbtn").is(":visible"))
            $("footer").css("padding-bottom", ctaHeight + "px");

        } else {
            $("footer").css("padding-bottom", "100px");
        }
    });
});