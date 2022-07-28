
jQuery( document ).ready(function($) {

    //SAMPLES SLIDER
    $('.slider-single').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      centerPadding: 40,
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
      centerPadding: 40,
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
            arrows: true,
            asNavFor: '.slider-single',
            centerPadding: 250,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            arrows: true,
            asNavFor: '.slider-single',
            centerPadding: 200,
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: 150,
            slidesToShow: 1,
            arrows: true,
            asNavFor: '.slider-single'
          }
        },
        {
          breakpoint: 500,
          settings: {
            centerPadding: 100,
            slidesToShow: 1,
            arrows: true,
            asNavFor: '.slider-single'
          }
        },
        {
          breakpoint: 400,
          settings: {
            centerPadding: 70,
            slidesToShow: 1,
            arrows: true,
            asNavFor: '.slider-single'
          }
        }
      ]
    });

    fragranceNotesHeight();
    
});

function fragranceNotesHeight() {

  setTimeout(function(){ 

    var maxHeight = 0;
    $(".slider-single .slick-slide").each(function(){
      

      $(this).children('.slider-content').each(function(){
        if ($(this).outerHeight() > maxHeight) { 
          maxHeight = $(this).height(); 
        }
      });

    });

    $(".slider-single .slick-slide").children('.slider-content').height(maxHeight);

    // SLIDER ARROWS
      var distance = $('.slider-single button.slick-prev').offset().top;

      $(window).scroll(function() {
        if ( $(window).scrollTop() >= distance ) {
          $('.slider-single button.slick-prev').addClass('sticky');
          $('.slider-single button.slick-next').addClass('sticky');
        } else {
          $('.slider-single button.slick-prev').removeClass('sticky');
          $('.slider-single button.slick-next').removeClass('sticky');
        }
      });

  }, 1000);

  setTimeout(function(){ 

    var samplesliderheight = $('.sample-slider').outerHeight();
    var windowHeight = $(window).outerHeight();
    var arrowDistance = $('.sample-slider').offset().top + samplesliderheight - windowHeight + 80; 

      $(window).scroll(function() {
        if ( $(window).scrollTop() >= arrowDistance ) {
          $('.slider-nav button.slick-prev').hide();
          $('.slider-nav button.slick-next').hide();
        } else {
          $('.slider-nav button.slick-prev').show();
          $('.slider-nav button.slick-next').show();
        }
      });

  }, 1000);

}

var windowWidth = $(window).width();

$(window).resize(function(){
    if ($(window).width() != windowWidth) {

        windowWidth = $(window).width();

        $(".slider-single .slick-slide").children('.slider-content').css("height", "");
        fragranceNotesHeight();

    }
});


//ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

// SAMPLES
var sampleSnake = new TimelineLite({repeat: -1,defaults: { duration: 150, ease: "none"}});
sampleSnake.to("#samples-snake", {rotate: 5});

