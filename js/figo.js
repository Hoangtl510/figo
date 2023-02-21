$(function() {
  // menu mobile
  $('.menu__mobile').click(function(e) {
    $('.navbar__list').toggleClass('show__menu');
    e.stopPropagation();
    e.stopImmediatePropagation();
  })

  //menu
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    nav: true,
    dots: false,
    loop: true,
    margin: 20,
    items: 1,
    thumbs: false,
    smartSpeed: 1300,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsiveClass: true,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });
  
  $('.menu__content-list').on( 'click', 'a', function() {
    var filter = $(this).attr('data-filter');
    
    $('.mySwiper .swiper-slide').css('display', 'none')
    $('.mySwiper .swiper-slide' + filter).css('display', '')
    $('.menu__content-item a' ).removeClass( 'filter-active' );
    $( this ).addClass( 'filter-active' );
    productSwiper.updateSize();
    productSwiper.updateSlides();
    productSwiper.updateProgress();
    productSwiper.updateSlidesClasses();
    productSwiper.slideTo(0);
    productSwiper.scrollbar.updateSize();
    return false;
  });

  //Sign In
  $(".text__sign-In").click(function() {
    $(".sign__in").css('opacity', '1');
    $(".sign__in").css('visibility', 'visible');
    $("body").css('overflow', 'hidden');
  });
  $(".icon__signin").click(function() {
    $(".sign__in").css('opacity', '0');
    $(".sign__in").css('visibility', 'hidden');
    $("body").css('overflow', 'scroll');
  })
});
