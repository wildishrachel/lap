
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

  //   var width = $(window).width(), height = $(window).height();

  //   if($(window).width() != width || $(window).height() != height){
  // //Do something
  //   }

    var windowWidth = $(window).width();

    $(window).resize(function(){
        // Check if the window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowWidth) {

            // Update the window width for next time
            windowWidth = $(window).width();

            $(".slider-single .slick-slide").css("height", "");
            fragranceNotesHeight();

        }

        // Otherwise do nothing

    });


    // $(window).resize(function() {
    //   $(".slider-single .slick-slide").css("height", "");
    //   fragranceNotesHeight();
    // });

    fragranceNotesHeight();
    
});

function fragranceNotesHeight() {
  if ($(window).width() > 991 ) {
    var maxHeight = 0;
    var notesHeight = 0;

    $(".slider-single .slick-slide").each(function(){
      if ($(this).height() > maxHeight) { 
        maxHeight = $(this).height(); 
      }
    });

    setTimeout(function(){ 
      $(".slider-single .slick-slide").each(function(){
        
        if ($(this).find('.fragrance-container').height() > notesHeight) { 
          notesHeight = $(this).find('.fragrance-container').height(); 
          console.log(notesHeight)
        }
        
        $(".slider-single .slick-slide").height(maxHeight + notesHeight);

      });
      
    }, 500);
  }

}

// //BACK TO TOP BUTTON
// jQuery(window).scroll(function($){
//     var scrollPos = jQuery(document).scrollTop();
//     if(scrollPos > 200) {
      
//     } else {
      
//     }
// });







//ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

// SAMPLES
var sampleSnake = new TimelineLite({repeat: -1,defaults: { duration: 150, ease: "none"}});
sampleSnake.to("#samples-snake", {rotate: 5});

