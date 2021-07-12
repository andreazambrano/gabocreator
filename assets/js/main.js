/**
*
* -----------------------------------------------------------------------------
*
* Template : Cretic - Creative Agency HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/
(function($) {
	"use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
           header.removeClass("sticky");
       } else {
           header.addClass("sticky");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });

    // swiper Slider
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
        el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        breakpoints: {
            320: {
                freeMode: true,
                pagination:false,
                speed: false,
                mousewheel: false,
            },
            481: {
                freeMode: true,
                pagination:false,
                speed: false,
                mousewheel: false,
            },
            576: {
                freeMode: true,
                pagination:false,
                speed: false,
                mousewheel: false,
            },
            768: {
                freeMode: true,
                pagination:false,
                speed: 3000,
                mousewheel: false,
            },
            992: {
            },
        }
    });

    //Pointer

    if($('.pointer-wrap').length){
        const cursor = cursorDot({
            diameter: 40,
            borderWidth: 2,
            borderColor: '#ed4e31',
            easing: 4,
            background: 'transparent'     
        })
        cursor.over("a", {
            scale: .5,
            background: 'rgba(0,0,0,.2)',

        });       
    }

    // Offcanvas menu toggleClass class 
    $(".off-menu .menu-part li button.first-btn").click(function(){ 
        $(this).parents('.off-menu .menu-part li').children('.sub1').toggleClass("show"); 
        $(this).parents('.off-menu .menu-part li').children('a').toggleClass("opened");         
        $(this).toggleClass("active"); 
    });

    $(".off-menu .menu-part li .off-sub-menu li button.second-btn").click(function(){ 
        $(this).parents('.off-menu .menu-part li .off-sub-menu li').children('.sub2').toggleClass("show"); 
        $(this).parents('.off-menu .menu-part li').children('a').toggleClass("opened");  
        $(this).toggleClass("active"); 
    });
	
    //window load
    $(window).on( 'load', function() {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on( 'click', function() {
        $("#loading").fadeOut(500);
        })
    })

    // Partical banner
    if ($('.rs-particle-banner').length) {
        // Some random colors
        const colors = ["#3CC157", "#2AA7FF", "#f2d119", "#FCBC0F", "#F85F36"];

        const numBalls = 25;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
          let ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style.background = colors[Math.floor(Math.random() * colors.length)];
          ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
          ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
          ball.style.transform = `scale(${Math.random()})`;
          ball.style.width = `${Math.random()}em`;
          ball.style.height = ball.style.width; 
          balls.push(ball);

          $('.rs-particle-banner').append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
          let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
          };

          let anim = el.animate(
            [
              { transform: "translate(0, 0)" },
              { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
              duration: (Math.random() + 1) * 2000, // random duration
              direction: "alternate",
              fill: "both",
              iterations: Infinity,
              easing: "ease-in-out"
            }
          );
        });
    } 
    
    //preloader
    $(window).on('load', function() {
        $("#loader").delay(1000).fadeOut(500);
    })
 
    // wow init
    new WOW().init();

    var testiCarousel = $('.testimonial-fade');
    if(testiCarousel.length){
        $(".testimonial-fade").owlCarousel({
            margin:0,
            nav:true,
            navText:[
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            loop:true,
            dots: false,
            items:1,
            autoplay:true,
            animateOut: 'fadeOut',
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true
        });
    }
    
    // magnificPopup init
    var imagepopup = $('.image-popup');
    if(imagepopup.length){
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }

    //Videos popup jQuery 
    var popupvideos = $('.popup-videos');
    if(popupvideos.length){
        $('.popup-videos').magnificPopup({
            disableOn: 10,
            type: 'iframe',
        }); 
    }

    //slider
    var slidercarousel = $('.slider-carousel');
    if(slidercarousel.length){
        $(".slider-carousel").owlCarousel({
            margin: 0,
            nav: false,
            navText:[
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            loop: true,
            dots: true,
            mouseDrag: false,
            items: 1,
            autoplay: true,
            animateOut: 'fadeOut',
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true
        });
    }

    // image loaded portfolio init
    var gridfilter = $('.grid');
        if(gridfilter.length){
        $('.grid').imagesLoaded(function() {
            $('.gridFilter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }
    
    // project Filter
    if ($('.gridFilter button').length) {
        var projectfiler = $('.gridFilter button');
            if(projectfiler.length){
            $('.gridFilter button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }
    

    //CountDown Timer
    var CountTimer = $('.CountDownTimer');
    if(CountTimer.length){ 
        $(".CountDownTimer").TimeCircles({
            fg_width: 0.030,
            bg_width: 0.8,
            circle_bg_color: "#ed4e31",
            circle_fg_color: "#ed4e31",
            time: {
                Days:{
                    color: "#ed4e31"
                },
                Hours:{
                    color: "#ed4e31"
                },
                Minutes:{
                    color: "#ed4e31"
                },
                Seconds:{
                    color: "#ed4e31"
                }
            }
        }); 
    }
    
    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            autoplayHoverPause: (HoverPause ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            slideBy: 2,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false),
                    center: false,
                },
                576: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                992: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false),
                }
            }
        });
    });
		
    // Counter Up
    var counter = $('.rs-count');
    if(counter.length) {  
        $('.rs-count').counterUp({
            delay: 20,
            time: 1500
        });
    }
    
    // Skill bar 
    var skillbar = $('.skillbar');
    if(skillbar.length) {
        $('.skillbar').skillBars({  
            from: 0,    
            speed: 4000,    
            interval: 100,  
            decimals: 0,    
        });
    }

    // Progress Bar Round 2
    var rs_pie = $('.rs-pie');
    if(rs_pie.length) {
        $('.rs-pie').each(function() {
            $(this).pieChart({
                barColor: '#ed4e31',
                trackColor: '#eff2f6',
                lineCap: 'round',
                lineWidth: 8,
                size: 130,
                onStep: function (from, to, percent) {
                    $(this.element).find('.rspie-value').text(Math.round(percent) + '%');
                }
            });
        });
    }

    // scrollTop init	
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    //canvas menu
    var navexpander = $('#nav-expander');
    if(navexpander.length){
        $('#nav-expander').on('click',function(e){
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if(navclose.length){
        $('#nav-close').on('click',function(e){
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }
	
	/*----------------------------
    single-productjs active
    ------------------------------ */
    var singleproductimage = $('.single-product-image');
    if(singleproductimage.length){
        $('.single-product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product-nav'
        });
    }

    var singleproductnav = $('.single-product-nav');
    if(singleproductnav.length){
        $('.single-product-nav').slick({
            slidesToShow: 3,
            asNavFor: '.single-product-image',
            dots: false,
            focusOnSelect: true,
            centerMode:false,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 591,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ] 
        });
    }
    

})(jQuery);