//Global var
var ttGlobal = {};

$(document).ready(function() {

    // USE STRICT
    "use strict";

    //----------------------------------------------------/
    // Predefined Variables
    //----------------------------------------------------/
    var $window = $(window),
        $body = $('body'),

        swipers = {},
        //Elements
        $header = $('#site-header'),
        $footer = $('#site-footer'),
        $counter = $('.counter'),
        $progress_bar = $('.skills-item'),
        $preloader = $('#tt-preloader');

    var overlayNav = $('.cd-overlay-nav'),
        overlayContent = $('.cd-overlay-content');


    ttGlobal.layerInit = function(){
        var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
        overlayNav.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0
        }, 50).velocity({
            height : diameterValue+'px',
            width : diameterValue+'px',
            top : -(diameterValue/2)+'px',
            left : -(diameterValue/2)+'px'
        }, 0);

        overlayContent.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0
        }, 50).velocity({
            height : diameterValue+'px',
            width : diameterValue+'px',
            top : -(diameterValue/2)+'px',
            left : -(diameterValue/2)+'px'
        }, 0);
    };


    /* -----------------------
     * Fixed Header
     * --------------------- */

    ttGlobal.fixedHeader = function () {
        // grab an element
        $header.headroom(
            {
                "offset": 210,
                "tolerance": 5,
                "classes": {
                    "initial": "animated",
                    "pinned": "slideDown",
                    "unpinned": "slideUp"
                }
            }
        );
    };


    /* -----------------------
     * Parallax footer
     * --------------------- */

    ttGlobal.parallaxFooter = function () {
        if ($footer.length && $footer.hasClass('js-fixed-footer')) {
            $footer.before('<div class="block-footer-height"></div>');
            $('.block-footer-height').matchHeight({
                target: $footer
            });
        }
    };

    /* -----------------------
     * Preloader
     * --------------------- */

    ttGlobal.preloader = function () {
        $window.scrollTop(0);
        setTimeout(function() {
          $preloader.fadeOut(800);
          if (window.location.hash.length < 5) return;

          const top = $(window.location.hash).offset().top;
          $('html, body').animate({
              scrollTop: $(window.location.hash).offset().top,
          }, 500, 'linear')
        }, 500);
        return false;
    };

    /* -----------------------
     * SmoothScroll
     * --------------------- */

    var scroll  = new SmoothScroll('a[href*="#"]', {
            ignore: '[data-toggle]', // Selector for links to ignore (must be a valid CSS selector)
            offset: 40 // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
     });


    /* -----------------------
     * COUNTER NUMBERS
     * --------------------- */

    ttGlobal.counters = function () {
        if ($counter.length) {
            $counter.each(function () {
                jQuery(this).waypoint(function () {
                    $(this.element).find('span').countTo();
                    this.destroy();
                }, {offset: '95%'});
            });
        }
    };

    /* -----------------------
     * Progress bars Animation
     * --------------------- */
    ttGlobal.progresBars = function () {
        if ($progress_bar.length) {
            $progress_bar.each(function () {
                jQuery(this).waypoint(function () {
                    $(this.element).find('.count-animate').countTo();
                    $(this.element).find('.skills-item-meter-active').fadeTo(300, 1).addClass('skills-animate');
                    this.destroy();
                }, {offset: '90%'});
            });
        }
    };


    /* -----------------------------
     * Toggle search overlay
     * ---------------------------*/
    ttGlobal.toggleSearch = function () {
        $('.search-popup').toggleClass('open');
        $('.search-full-screen input').focus();
    };

    /* -----------------------------
     * Embedded Video in pop up
     * ---------------------------*/
    ttGlobal.mediaPopups = function () {
        $('.js-popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
        $('.js-zoom-image, .link-image').magnificPopup({
            type: 'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = 'mfp-zoom-in';
                }
            },
            closeOnContentClick: true,
            midClick: true
        });
    };
    /* -----------------------------
     * Equal height
     * ---------------------------*/
    ttGlobal.equalHeight = function () {
        $('.js-equal-child').find('.theme-module').matchHeight({
            property: 'min-height'
        });
    };


    /* -----------------------------
     * Sliders and Carousels
     * ---------------------------*/

    ttGlobal.initSwiper = function () {
        var initIterator = 0;

        $('.swiper-container').each(function () {

            var $t = $(this);
            var index = 'swiper-unique-id-' + initIterator;
            var $breakPoints = false;
            $t.addClass('swiper-' + index + ' initialized').attr('id', index);
            $t.closest('.crumina-module').find('.swiper-pagination').addClass('pagination-' + index);

            var $effect = ($t.data('effect')) ? $t.data('effect') : 'slide',
                $crossfade = ($t.data('crossfade')) ? $t.data('crossfade') : true,
                $loop = ($t.data('loop') == false) ? $t.data('loop') : true,
                $showItems = ($t.data('show-items')) ? $t.data('show-items') : 1,
                $scrollItems = ($t.data('scroll-items')) ? $t.data('scroll-items') : 1,
                $scrollDirection = ($t.data('direction')) ? $t.data('direction') : 'horizontal',
                $mouseScroll = ($t.data('mouse-scroll')) ? $t.data('mouse-scroll') : false,
                $autoplay = ($t.data('autoplay')) ? parseInt($t.data('autoplay'), 10) : 0,
                $autoheight = ($t.hasClass('auto-height')) ? true: false,
                $nospace = ($t.data('nospace')) ? $t.data('nospace') : false,
                $centeredSlider = ($t.data('centered-slider')) ? $t.data('centered-slider') : false,
                $stretch = ($t.data('stretch')) ? $t.data('stretch') : 0,
                $depth = ($t.data('depth')) ? $t.data('depth') : 0,
                $slidesSpace = ($showItems > 1 && true != $nospace ) ? 20 : 0;

            if ($showItems > 1) {
                $breakPoints = {
                    480: {
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    }
                }
            }

            swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
                pagination: '.pagination-' + index,
                paginationClickable: true,
                direction: $scrollDirection,
                mousewheelControl: $mouseScroll,
                mousewheelReleaseOnEdges: $mouseScroll,
                slidesPerView: $showItems,
                slidesPerGroup: $scrollItems,
                spaceBetween: $slidesSpace,
                keyboardControl: true,
                setWrapperSize: true,
                preloadImages: true,
                updateOnImagesReady: true,
                centeredSlides: $centeredSlider,
                autoplay: $autoplay,
                autoHeight: $autoheight,
                loop: $loop,
                breakpoints: $breakPoints,
                effect: $effect,
                fade: {
                    crossFade: $crossfade
                },
                parallax: true,
                onImagesReady: function (swiper) {

                },
                coverflow: {
                    stretch: $stretch,
                    rotate: 0,
                    depth: $depth,
                    modifier: 2,
                    slideShadows : false
                },
                onSlideChangeStart: function (swiper) {
                   if ($t.closest('.crumina-module').find('.slider-slides').length) {
                                       $t.closest('.crumina-module').find('.slider-slides .slide-active').removeClass('slide-active');
                                       var realIndex = swiper.slides.eq(swiper.activeIndex).attr('data-swiper-slide-index');
                                       $t.closest('.crumina-module').find('.slider-slides .slides-item').eq(realIndex).addClass('slide-active');
                                   }
                               }
            });
            initIterator++;
        });

        //swiper arrows
        $('.btn-prev').on('click', function () {
            var current_id = $(this).closest('.crumina-module-slider').find('.swiper-container').attr('id');
            swipers['swiper-' + current_id].slidePrev();
        });

        $('.btn-next').on('click', function () {
            var current_id = $(this).closest('.crumina-module-slider').find('.swiper-container').attr('id');
            swipers['swiper-' + current_id].slideNext();
        });

        //swiper tabs

        $('.slider-slides .slides-item').on('click', function (e) {
            e.preventDefault();
            var current_id = $(this).closest('.crumina-module-slider').find('.swiper-container').attr('id');
            if ($(this).hasClass('slide-active')) return false;
            var activeIndex = $(this).parent().find('.slides-item').index(this);
            swipers['swiper-' + current_id].slideTo(activeIndex + 1);
            $(this).parent().find('.slide-active').removeClass('slide-active');
            $(this).addClass('slide-active');

            return false;

        });
    };


  ttGlobal.burgerAnimation = function () {
      /* In animations (to close icon) */

      var beginAC = 80,
        endAC = 320,
        beginB = 80,
        endB = 320;

      function inAC(s) {
        s.draw('80% - 240', '80%', 0.3, {
          delay: 0.1,
          callback: function () {
            inAC2(s)
          }
        });
      }

      function inAC2(s) {
        s.draw('100% - 545', '100% - 305', 0.6, {
          easing: ease.ease('elastic-out', 1, 0.3)
        });
      }

      function inB(s) {
        s.draw(beginB - 60, endB + 60, 0.1, {
          callback: function () {
            inB2(s)
          }
        });
      }

      function inB2(s) {
        s.draw(beginB + 120, endB - 120, 0.3, {
          easing: ease.ease('bounce-out', 1, 0.3)
        });
      }

      /* Out animations (to burger icon) */

      function outAC(s) {
        s.draw('90% - 240', '90%', 0.1, {
          easing: ease.ease('elastic-in', 1, 0.3),
          callback: function () {
            outAC2(s)
          }
        });
      }

      function outAC2(s) {
        s.draw('20% - 240', '20%', 0.3, {
          callback: function () {
            outAC3(s)
          }
        });
      }

      function outAC3(s) {
        s.draw(beginAC, endAC, 0.7, {
          easing: ease.ease('elastic-out', 1, 0.3)
        });
      }

      function outB(s) {
        s.draw(beginB, endB, 0.7, {
          delay: 0.1,
          easing: ease.ease('elastic-out', 2, 0.4)
        });
      }

      /* Scale functions */

      function addScale(m) {
        m.className = 'menu-icon-wrapper scaled';
      }

      function removeScale(m) {
        m.className = 'menu-icon-wrapper';
      }

      /* Awesome burger scaled */

      var pathD = document.getElementById('pathD'),
        pathE = document.getElementById('pathE'),
        pathF = document.getElementById('pathF'),
        segmentD = new Segment(pathD, beginAC, endAC),
        segmentE = new Segment(pathE, beginB, endB),
        segmentF = new Segment(pathF, beginAC, endAC),
        wrapper2 = document.getElementById('menu-icon-wrapper'),
        trigger2 = document.getElementById('menu-icon-trigger'),
        toCloseIcon2 = true;

      wrapper2.style.visibility = 'visible';

      trigger2.onclick = function () {
        addScale(wrapper2);
        if (toCloseIcon2) {
          inAC(segmentD);
          inB(segmentE);
          inAC(segmentF);
        } else {
          outAC(segmentD);
          outB(segmentE);
          outAC(segmentF);

        }
        toCloseIcon2 = !toCloseIcon2;
        setTimeout(function () {
          removeScale(wrapper2)
        }, 450);
      };
    };



    /* -----------------------------
     * On Click Functions
     * ---------------------------*/


    $window.keydown(function (eventObject) {
        if (eventObject.which == 27) {
            $body.removeClass('overlay-enable');
            $('.search-standard').removeClass('open');
            $('#menu-icon-trigger').css({'opacity': '1'});
            $('.top-bar').removeClass('open');
        }
    });

    jQuery('.signup-btn').on('click', function (e) {
      e.preventDefault();
      $('#signup-email').addClass('open');
      setTimeout(function() {
        $('#signup-email .signup-email-form').addClass('open');
        $('#signup-email input').focus();
      }, 100);
    });

    jQuery(".js-open-search-popup > *").on('click', function () {
        ttGlobal.toggleSearch();
        return false;
    });

    jQuery("#top-bar-js").on('click', function () {
        $('.top-bar').addClass('open');
        return false;
    });

    jQuery("#top-bar-close-js").on('click', function () {
        $('.top-bar').removeClass('open');
        return false;
    });

    jQuery(".js-message-popup").on('click', function () {
        setTimeout(function() {  $('.message-popup').addClass('open'); }, 300);
        return false;
    });

    jQuery(".js-popup-close").on('click', function () {
      { $('.search-popup').removeClass('open'); }
      { $('.message-popup').removeClass('open'); }
      { $('.popup-gallery').removeClass('open'); }
      return false;
    });


    /*---------------------------------
     ACCORDION
     -----------------------------------*/
    jQuery('.accordion-heading').on('click', function () {
        jQuery(this).parents('.panel-heading').toggleClass('active');
        jQuery(this).parents('.accordion-panel').toggleClass('active');
    });

    //Scroll to top.
    jQuery('.back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });

    jQuery(function(){
        jQuery('.social__item.main').hover(function(){
            jQuery('.social__item.main').siblings('.share-product').addClass('open')
        });
        jQuery('.share-product') .mouseleave(function(){

            jQuery('.share-product').removeClass('open')

        });
    });

    jQuery('.js-pricing-switcher').on('click', function(){
        var $is_year = $(this).prev().is(':checked');
        var $section = $(this).closest('.crumina-pricings');
        var $price = $section.find('.price');
        $price.each(function(){
            if($is_year){
                $(this).text($(this).data('annually'));
            }else{
                $(this).text($(this).data('monthly'));
            }
        });
    });


    if ($('.js-typeahead').length) {
      ttGlobal.typeAhead();
    }

    if ($('#menu-icon-wrapper').length) {
        ttGlobal.burgerAnimation();
    }
    
    ttGlobal.fixedHeader();
    ttGlobal.initSwiper();
    ttGlobal.equalHeight();
    ttGlobal.mediaPopups();
    ttGlobal.parallaxFooter();

    // Dom modifications
    $('select').niceSelect();

    ttGlobal.preloader();
    ttGlobal.layerInit();

    // On Scroll animations.
    ttGlobal.counters();
    ttGlobal.progresBars();

    window.intercomSettings = {
      app_id: "vsjj5inu"
    };

    $(window).on('resize', function(){
        window.requestAnimationFrame( ttGlobal.layerInit);
    });

    window.consentGiven = function() {
      var name = "CookieConsent=true";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return true;
        }
      }
      return false;
    }

    if (consentGiven()) {
      loadIntercom();
    }
});

window.loadIntercom = function () {
  var w = window;
  var ic = w.Intercom;
  if (typeof ic === "function") {
    ic('reattach_activator');
    ic('update', w.intercomSettings);
  } else {
    var d = document;
    var i = function () { i.c(arguments); };
    i.q = [];
    i.c = function (args) { i.q.push(args); };
    w.Intercom = i;
    var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/vsjj5inu'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
  }
}

document.cookie = "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

window.loadMailchimp = function () {
  var w = window;
  var d = document;
  var s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js';
  s.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false')
  var x = d.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x)
  s.onload = function() {
    w.dojoRequire(["mojo/signup-forms/Loader"], function(L) {
      L.start({
        "baseUrl": "mc.us5.list-manage.com",
        "uuid": "ebee1bbb16fc0a1aaf4383f63",
        "lid": "5ece28ec23",
        "uniqueMethods": true
      })
    })
  }
}