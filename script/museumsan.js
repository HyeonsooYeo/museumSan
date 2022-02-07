$(function () {
    // m_swiper
    var swiper = new Swiper(".m_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // news_swiper
    var swiper = new Swiper(".news_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // prt_swiper
    var swiper = new Swiper(".prt_swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.m_bar').click(function () {
        $('.m_header').css("opacity", 0)
        $('.m_menu_page').css("right", 0);
        $('body').css("paddingTop", 0)
        $('html').css("overflowY", 'hidden')
        $('.m_menu_page').css("overflowY", 'scroll')
    });
    $('.m_menu_close').click(function () {
        $('.m_menu_page').css("right", '-100%');
        $('.m_header').css("opacity", 1)
        $('body').css("paddingTop", "70px")
        $('.m_menu_page').css({"overflow": 'hidden'})
        $('html').css("overflowY", 'scroll')
    });


    //  아코디언 메뉴
    $('.menu_aco').click(function () {
        $('.m_submenu_list').slideUp();
        if ($(this).children('.m_submenu_list').is(':hidden')) {
            $(this).children('.m_submenu_list').slideDown();
        } else {
            $(this).children('.m_submenu_list').slideUp();
        }
    });

    // PC메뉴
    $('.pc_header').append('<span class="bg"></span>');
    $('.pc_menu2 > ul > li').on({
        mouseenter: function () {
            $('.pc_submenu, .pc_submenu_display, span.bg').stop(true).slideDown(300);
        },
        mouseleave: function () {
            $('.pc_submenu, .pc_submenu_display, span.bg').stop(true).slideUp(600);
        }
    });

    // 팝업
    $('.pop_open').click(function(){
        $('#popup').css("display","block")
    })
    $('.pop_close').click(function(){
        $('#popup').css('display','none')
    })
})