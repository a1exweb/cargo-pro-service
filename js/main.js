$(document).ready(function () {
    $('.show-menu').on('click', function (e) {
        $('.menu').toggleClass('menu_active');
        $('.show-menu').toggleClass('show-menu_active');
    })
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > 150) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });
    var $page = $('html, body');



    // section happy :)
    let sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        let cur_pos = $(this).scrollTop();

        sections.each(function () {
            let top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('menu__link_active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('menu__link_active');
            }
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                $('.menu').find('li:last-child a').removeClass('menu__link_active');
                $('.menu').find('li a').removeClass('menu__link_active');
                $('.menu').find('li:last-child a').addClass('menu__link_active');
            }
        });
    });

    nav.find('a').on('click', function () {
        let $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 1
        }, 500);

        return false;
    });

    $(document).ready(function(){
        $('.slider').slick(
            {
                arrows: false,
                dots: true,
                dotsClass: 'slider-dots'
            }
        );
    });
});