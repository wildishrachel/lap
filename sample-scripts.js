
jQuery( document ).ready(function($) {

    //SAMPLES SLIDER
    $('.slider-single').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: 150,
      prevArrow: "<button type='button' class='slick-prev'>previous</button>",
      nextArrow: "<button type='button' class='slick-next'>next</button>",
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            asNavFor: '.slider-nav',
            fade: true,
            arrows: false
          }
        }
      ]
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      centerPadding: 150,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev'>previous</button>",
      nextArrow: "<button type='button' class='slick-next'>next</button>",
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            arrows: true,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            asNavFor: '.slider-single',
            centerPadding: 250,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            arrows: false,
            asNavFor: '.slider-single',
            centerPadding: 200,
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: 150,
            slidesToShow: 1,
            arrows: false,
            asNavFor: '.slider-single'
          }
        },
        {
          breakpoint: 500,
          settings: {
            centerPadding: 100,
            slidesToShow: 1,
            arrows: false,
            asNavFor: '.slider-single'
          }
        },
        {
          breakpoint: 400,
          settings: {
            centerPadding: 70,
            slidesToShow: 1,
            arrows: false,
            asNavFor: '.slider-single'
          }
        }
      ]
    });
    
});


//ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

// SAMPLES
var sampleSnake = new TimelineLite({repeat: -1,defaults: { duration: 150, ease: "none"}});
sampleSnake.to("#samples-snake", {rotate: 5});

