
// DISCOVER NAV

$('#discoverTab').on('click', function() {
  $("#discover #slideOut").addClass('showSlideOut');
  $(this).addClass('active');
  $('#discover').addClass('open');
});
$('#slideOut').find('.close').on('click', function(event) {
  event.preventDefault();
  hideDiscoverSlideOut();
});
$('#slideOut').next('.after').on('click', function() {
  hideDiscoverSlideOut();
});

if (jQuery(".lap-container").hasClass("homepage")) {
  $('#slideOut').find('a.fragrance').on('click', function() {
    hideDiscoverSlideOut();
    // alert('click');
    
  });
}

function hideDiscoverSlideOut() {
  $("#slideOut").removeClass('showSlideOut');
  $('.slideOutTab').removeClass('active');
  $('#discover').removeClass('open');
}

// SAMPLES NAV

$('#samplesTab').on('click', function() {
  $("#samples #samplesSlideOut").addClass('showSlideOut');
  $(this).addClass('active');
   $('#samples').addClass('open');
});
$('#samplesSlideOut').find('.close').on('click', function(event) {
  event.preventDefault();
  hideSamplesSlideOut();
});
$('#samplesSlideOut').next('.after').on('click', function() {
  hideSamplesSlideOut();
});
$('#samplesSlideOut').find('.button').on('click', function(event) {
  console.log('clicked');
  hideSamplesSlideOut();
  // event.preventDefault();
  // hideSamplesSlideOut();
  setTimeout(function() {
    $('#basketPopOverSlideOut').removeClass('showSlideOut');
  }, 4000);
});

function hideSamplesSlideOut() {
  $("#samplesSlideOut").removeClass('showSlideOut');
  $('.slideOutTab').removeClass('active');
  $('#samples').removeClass('open');
}

// OUT OF STOCK POPUP
this.$outOfStockSlideOut = $('#outOfStockSlideOut');

$('.nostock').on('click', function() {
  $outOfStockSlideOut.addClass('showSlideOut');
  $('#outofstock').addClass('open');
});

$outOfStockSlideOut.find('.close').on('click', function(event) {
  event.preventDefault();
  $outOfStockSlideOut.removeClass('showSlideOut');
  $('#outofstock').removeClass('open');
});

this.$outOfStockSlideOut.next('.after').on('click', function(event) {
  $("#outOfStockSlideOut").removeClass('showSlideOut');
  $outOfStockSlideOut.find('.slideOutTab').removeClass('active');
  $('#outofstock').removeClass('open');
});

// ADD TO BAG POPUP
$('.bag').on('click', function() {
  $('#basketPopOverSlideOut').addClass('showSlideOut');
  setTimeout(function() {
    $('#basketPopOverSlideOut').removeClass('showSlideOut');
  }, 4000);
});
$('#basketPopOverSlideOut').find('.close').on('click', function(event) {
  event.preventDefault();
  $('#basketPopOverSlideOut').removeClass('showSlideOut');
});

// ORDER SAMPLE POPUP
$('.order').on('click', function(event) {
  event.preventDefault();
  $("#samplesSlideOut").addClass('showSlideOut');
  $(this).addClass('active');
  $("#samples").addClass('open');
});

//ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

//FADE IN ON SCROLL

// var sections = gsap.utils.toArray('.fadeIn');
// sections.forEach(function(section) {
//   gsap.to(section, { autoAlpha: 1, y:0, duration: 2,
//     scrollTrigger: {
//         trigger: section,
//         start: 'top bottom-=100',
//         scrub: false,
//         end: '+=500',
//         // onRefresh: self => self.progress === 1 && self.animation.progress(1),
//     }
//   });
// });

//BACK TO TOP BUTTON
jQuery(window).scroll(function($){
    var scrollPos = jQuery(document).scrollTop();

    if(scrollPos > 200) {
      jQuery('.slideoutbuttons').addClass('scrolled');
    } else {
      jQuery('.slideoutbuttons').removeClass('scrolled');
    }

});


