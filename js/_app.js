/*!
 *  v1.0.0
 * Copyright 2023 
 */

var myFullpageCTL;
var isMobile;
$(document).ready(function(){
    // MOBILE DETECT
    isMobile = false;
    (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
    isMobile = jQuery.browser.mobile;
    if(isMobile == false){
        $.get("/lang/ko/home_pc.html", function(data){
            $(".wrap").append(data);
        });
        $.get("/lang/ko/home_mo.html", function(data){
            $(".wrap").append(data);
        });
        myFullpageCTL = false;
    }else{
        $.get("/lang/ko/home_mo.html", function(data){
            $(".wrap").append(data);
        });
    }

})
$(window).load(function(){
    var winWidth = $(window).width();

    // mobile only
    var controller = new ScrollMagic.Controller();

    var scene2_1 = new ScrollMagic.Scene({
        triggerElement: "#home.container.mo .section02", //트리거 설정
        triggerHook: 0.8,
        reverse:false
    })
    .setClassToggle("#home.container.mo .section02, #home.container.mo .section03", "effect")
    .addTo(controller)

    var scene2_8 = new ScrollMagic.Scene({
        triggerElement: "#home.container.mo .section04", //트리거 설정
        triggerHook: 0.5,
        reverse:false
    })
    .setClassToggle("#home.container.mo .section04", "active")
    .addTo(controller)

    var scene2_2 = new ScrollMagic.Scene({
        triggerElement: "#home.container.mo .section02", //트리거 설정
        triggerHook: 0.5,
        reverse:false
    })
    .setClassToggle("#home.container.mo .section03 .right_box ul", "active")
    .addTo(controller)

    var scene2_3 = new ScrollMagic.Scene({
        triggerElement: "#home.container.mo .section05", //트리거 설정
        triggerHook: 0.8,
        reverse:false
    })
    .setClassToggle("#home.container.mo .section05", "effect")
    .addTo(controller)


    function mainEvents() {
        var winWidth = $(window).width();

        if (winWidth < 1281) {
            $('#top-btn').on('click', function() {
                $('html, body').stop().animate({scrollTop:0}, 800);
                jQuery(this).fadeOut(200);
            })
        }

        if (winWidth > 768 && winWidth <= 1281) {
            var controller = new ScrollMagic.Controller();

            var scene1_1 = new ScrollMagic.Scene({
                triggerElement: "#home.container.pc .section02", //트리거 설정
                triggerHook: 0.8
            })
            .setClassToggle("#home.container.pc .section02, #home.container.pc .section03", "effect")
            .addTo(controller)

            var scene1_2 = new ScrollMagic.Scene({
                triggerElement: "#home.container.pc .section03", //트리거 설정
                triggerHook: 0.3
            })
            .setClassToggle("#home.container.pc .section03 .right_box ul", "active")
            .addTo(controller)

            var scene1_8 = new ScrollMagic.Scene({
                triggerElement: "#home.container.pc .section04", //트리거 설정
                triggerHook: 0.5
            })
            .setClassToggle("#home.container.pc .section04", "active")
            .addTo(controller)

            var scene1_3 = new ScrollMagic.Scene({
                triggerElement: "#home.container.pc .section05", //트리거 설정
                triggerHook: 0.8
            })
            .setClassToggle("#home.container.pc .section05", "effect")
            .addTo(controller)

            var scene10 = new ScrollMagic.Scene({
                triggerElement: "#home.container.pc .section05", //트리거 설정
                triggerHook: 0.8
            })
            .setClassToggle("#home.container.pc .section05", "effect")
            .addTo(controller)

            var height = $(document).scrollTop();
            var triggerTwo = $('#home.container.pc .main-visual').height();
            var triggerThree = $('html, body').offset().top;

            if (height > triggerTwo) {
                $('#top-btn').show();
            } else {
                $('#top-btn').hide(300);
            }

            if (height > triggerThree) {
                $('header').addClass('on');
            } else {
                $('header').removeClass('on');
            }
        }

        if (winWidth < 1025) {
            var height = $(document).scrollTop();
            var trigger = $('html, body').offset().top;
            var triggerTwo = $('#home.container.mo .section02').offset().top - 300;
            if (height > trigger) {
                $('header').addClass('on');
            } else {
                $('header').removeClass('on');
            }

            if (height > triggerTwo) {
                $('#top-btn').show();
            } else {
                $('#top-btn').hide(300);
            }
        }

        if (winWidth < 768) {
            var controller = new ScrollMagic.Controller();

            var scene2_1 = new ScrollMagic.Scene({
                triggerElement: "#home.container.mo .section02", //트리거 설정
                triggerHook: 0.8,
                reverse:false
            })
            .setClassToggle("#home.container.mo .section02, #home.container.mo .section03", "effect")
            .addTo(controller)

            var scene2_8 = new ScrollMagic.Scene({
                triggerElement: "#home.container.mo .section04", //트리거 설정
                triggerHook: 0.5,
                reverse:false
            })
            .setClassToggle("#home.container.mo .section04", "active")
            .addTo(controller)

            var scene2_2 = new ScrollMagic.Scene({
                triggerElement: "#home.container.mo .section02", //트리거 설정
                triggerHook: 0.5,
                reverse:false
            })
            .setClassToggle("#home.container.mo .section03 .right_box ul", "active")
            .addTo(controller)

            var scene2_3 = new ScrollMagic.Scene({
                triggerElement: "#home.container.mo .section05", //트리거 설정
                triggerHook: 0.8,
                reverse:false
            })
            .setClassToggle("#home.container.mo .section05", "effect")
            .addTo(controller)
        }
    }

    $(window).resize(function(){
        mainEvents();
        if (winWidth > 1280) {
            headerWrap.removeClass('active');
            mNav.removeClass('active');
            mNavDim.removeClass('on');
            htmlBody.removeClass('fixed');
        }
        winWidth = $(window).width();
        if(winWidth < 1281){
            if(myFullpageCTL == true){

                $.fn.fullpage.destroy('all');
                myFullpageCTL = false;
            }
        }else{
            if(myFullpageCTL == false){
                makeFullPage();
                myFullpageCTL = true;
            }
        }
    });

    if(myFullpageCTL == false){
        makeFullPage();
        myFullpageCTL = true;
    }

    if(winWidth < 1281){
        if(myFullpageCTL == true){
            $.fn.fullpage.destroy('all');
            myFullpageCTL = false;
        }
    }else{
        if(myFullpageCTL == false){
            makeFullPage();
            myFullpageCTL = true;
        }
    }

    function makeFullPage(){
        $('.container.pc').fullpage({
            anchors: ['', 'Introduce', 'Service', 'ITecosystem', 'News'],
            // STAMP
            // offsetSectionsKey: 'c3RhbS1wLmNvbV96OEFiMlptYzJWMFUyVmpkR2x2Ym5NPXR4UQ==',
            // NAVER CLOUD CORP
            offsetSectionsKey: 'bmF2ZXJjbG91ZGNvcnAuY29tXzRRN2IyWm1jMlYwVTJWamRHbHZibk09R1NV',
            licenseKey:"9680D241-C8F542C1-A83107A4-8E33A65C",
            offsetSections: true,
            scrollOverflow: true,
            v2compatible: true,
            css3:true,
            easing: 'easeInOutCubic',
            scrollingSpeed: 800,
            scrollOverflowEndPrevent: { delay: 500, reversal: false },
            scrollOverflowOptions: {
                disablePointer: false,
                scrollbars: false
            },
            fitToSection: true,
            afterRender: function(){
                $.fn.fullpage.silentMoveTo(1);
            },
            afterLoad: function(a, index){
                // console.log(index);
                if(index == 3){
                    $(".right_box ul").addClass("active");
                }else{
                    $(".right_box ul").removeClass("active");
                }
            },
            onLeave: function(index, nextIndex, direction){
                //내려갈때
                if(direction == 'down'){
                    //내려갈때
                    if(index - nextIndex <= -1){
                        $('#top-btn').fadeIn();
                        $('header').addClass('on');
                    }
                }
                //올라갈때
                if(direction == 'up'){
                    //한칸씩 올라갈때
                    if(index - nextIndex == 1){
                        if(index == 2 && nextIndex == 1 && direction == 'up'){
                            $('#top-btn').fadeOut();
                            $('header').removeClass('on');
                            }
                    }
                    //여러칸 올라갈때
                    if(index - nextIndex > 1){
                        $('#top-btn').fadeOut();
                        $('header').removeClass('on');
                    }
                }
            },
        });
    }

    $(window).scroll(function() {
        mainEvents()
    });

    $("#mainBtnNext").on("click", function() {
        $.fn.fullpage.moveTo(2);
    })

    $("#subBtnNext").on("click", function() {
        $.fn.fullpage.moveTo(5);
    })

    $("#top-btn").on("click", function() {
        $.fn.fullpage.moveTo(1);
        jQuery(this).fadeOut(200);
    })


    $(".lang_cont .lang_btn").on("click", function() {
        if(jQuery(this).parent('.lang_cont').hasClass('active')) {
            jQuery(this).parent('.lang_cont').removeClass('active');
            jQuery(this).next('ul').stop().slideUp(300);
        } else {
            jQuery(this).parent('.lang_cont').addClass('active');
            jQuery(this).next('ul').stop().slideDown(300);
        }
    })

    $(document).click(function(e){
        if (!$(e.target).is('.lang_cont .lang_btn')) {
            $('.lang_cont').removeClass('active');
            $('.lang_cont').find('ul').stop().slideUp(300);
        }
    });

    //SWIPER - TOP VISUAL AREA PC / MOBILE
    var swiperAutoplayDelay = 5000;
    var tick;
    var swiper = new Swiper('.container.pc #main_visual_slide', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,
        speed : 1200,
        autoplay: {
            delay: swiperAutoplayDelay,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        on: {
            slideChangeTransitionEnd: function() {
                tick = setInterval(progress, 50);
                var $circle = $('#svg #bar');
                var r = $circle.attr('r');
                var percentVal = 0;
                function progress() {
                    percentVal += 50;
                    val = (percentVal/swiperAutoplayDelay)*100;
                    var per = ((100 - val) / 100) * Math.PI *r * 2;
                    $circle.css({
                        strokeDashoffset: per
                    });
                }
            },
            progress: function(){
                clearInterval(tick);
            }
        },
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true
    });

    var swiper02 = new Swiper('.container.mo #main_visual_slide', {
        navigation: {
            nextEl: '.swiper-button-next-mo',
            prevEl: '.swiper-button-prev-mo'
        },
        loop: true,
        speed : 1200,
        autoplay: {
            delay: swiperAutoplayDelay,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination-mo',
            type: 'fraction'
        },
        on: {
            slideChangeTransitionEnd: function() {
                tick = setInterval(progress, 50);
                var $circle = $('#svg #bar');
                var r = $circle.attr('r');
                var percentVal = 0;
                function progress() {
                percentVal += 50;
                    val = (percentVal/swiperAutoplayDelay)*100;
                    var per = ((100 - val) / 100) * Math.PI *r * 2;
                    $circle.css({
                        strokeDashoffset: per
                    });
                }
            },
            progress: function(){
                clearInterval(tick);
            }
        },
        breakpoints: {
            767: {speed : 800,}
        },
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true
    });

if(winWidth > 1282){
    //SCROLLMAGIC - PC
    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({triggerElement: "#home.container.pc .section02", triggerHook: 0.8}).setClassToggle("#home.container.pc .section02, #home.container.pc .section03", "effect").addTo(controller)
    var scene2 = new ScrollMagic.Scene({triggerElement: "#home.container.pc .section05", triggerHook: 0.8}).setClassToggle("#home.container.pc .section05", "effect").addTo(controller)
}

    var familySiteListWrap = jQuery('.family_site');
    var familySiteListBtn = jQuery('#family_list_btn');
    familySiteListBtn.on('click', function() {
        jQuery(this).parent(familySiteListWrap).toggleClass('on');
        jQuery(this).next().slideToggle(300);
    })

    var footSiteListWrap = jQuery('#home.container.mo .family_site');
    var footSiteListBtn = jQuery('#home.container.mo #foot_list_btn');
    footSiteListBtn.on('click', function() {
        jQuery(this).parent(footSiteListWrap).toggleClass('on');
        jQuery(this).next().slideToggle(300);
    })

    var hamburger = jQuery('.wrap header .header_wrap .m_menu');
    var mNav = jQuery('.wrap header .header_wrap .m-nav');
    var mNavDim = jQuery('.wrap header .header_wrap .dim');
    var mNavClose = jQuery('.wrap header .header_wrap .m-nav .top a.close-btn');
    var htmlBody = jQuery('html');
    var headerWrap = jQuery('.wrap header .header_wrap .header_nav');

    hamburger.on('click', navCTL);

    mNavClose.on('click', function() {
        headerWrap.removeClass('active');
        mNav.removeClass('active');
        mNavDim.removeClass('on');
        htmlBody.removeClass('fixed');
    })

    function navCTL(){
        if(jQuery(this).hasClass('active')){
            headerWrap.removeClass('active');
            mNav.removeClass('active');
            mNavDim.removeClass('on');
            htmlBody.removeClass('fixed');
        }else{
            headerWrap.addClass('active');
            mNav.addClass('active');
            mNavDim.addClass('on');
            htmlBody.addClass('fixed');
        }
    }

    $("#home.container.pc #mainBtnNext_two").on("click", function() {
        $('html, body').stop().animate({
            scrollTop: $('#home.container.pc #sub-visual').offset().top
        }, 600);
    })

    $("#home.container.pc #subBtnNext_two").on("click", function() {
        $('html, body').stop().animate({
            scrollTop: $('#home.container.pc #sub-visual02').offset().top
        }, 600);
    })
});