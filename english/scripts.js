
// gsap.set('#snake', {xPercent:-50});
// const skip = document.getElementById('skipbutton');

jQuery( document ).ready(function($) {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

    // $('#overlay').addClass('hide');

    resizeIntro();

    //FRAGRANCE NOTES
    $('.perfume').each(function(){
      $(this).find('.view').click(function(){        
        $(this).closest('.parent-container').find('.outer-container').toggleClass('toggle');
        $(this).closest('.parent-container').toggleClass('toggle');
      })
    });

    $('#slideOut').find('a.fragrance').on('click', function() {
      $('.perfume .parent-container .outer-container').removeClass('toggle');
      $('.perfume .parent-container').removeClass('toggle');
      $("#slideOut").removeClass('showSlideOut');
      $('.slideOutTab').removeClass('active');
      $('#discover').removeClass('open');
      $('.fragrance-container').removeClass('in');
    });

    //FRAGRANCE NOTES
    // $('#tenebrae').each(function(){
    //   $(this).find('.view').click(function(){        
    //     $(this).closest('.perfume').toggleClass('overflow-bottom');
    //   })
    // });

});


var windowWidth = $(window).width();

jQuery( window ).resize(function($) {
  // jQuery(window).on('resize', function($){
  

  if (jQuery(window).width() != windowWidth) {

      windowWidth = jQuery(window).width();

      resizeIntro();

  }
});

function resizeIntro() {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

    // var twentyWindow = windowHeight / 100 * 20;

    // console.log(headerHeight);
    // console.log(windowHeight);

    // var headerHeight = headerHeight + 45;
    // var actualHeight = twentyWindow - headerHeight;

    $('#intro .intro-top').height(windowHeight - headerHeight - 150);
}


//BACK TO TOP BUTTON
jQuery(window).scroll(function($){
    var scrollPos = jQuery(document).scrollTop();
    if(scrollPos > 100) {
      jQuery('#intro .col-12 > p').css('opacity',1);
      jQuery('.scroll').css('opacity',0);
      jQuery('#intro .col-12 > p').addClass('show');
      jQuery('.scroll').addClass('hidden');
    }

    if(scrollPos > 200) {
      jQuery('#top').addClass('show');
    } else {
      jQuery('#top').removeClass('show');
    }


});

//ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

//HEADER ELEMENTS

// if (jQuery(".lap-container").hasClass("homepage")) {
  
  skip.addEventListener('click',function(){
    openingAnimations();
  });

  desktopPlayer.on('ended', function() {
    openingAnimations();
  });
  mobilePlayer.on('ended', function() {
    openingAnimations();
  });

  function openingAnimations() {
    var tl = new TimelineLite();
    tl
      .add('start')
      .to("#yellow-flower-stem", 2, {delay:0.5, x:-90, y:-60, rotate:0, scale:1}, 'start')
      .to("#white-purple-flower-stem", 2, {delay:0.5, y:-70, scale:1}, 'start')
      .to("#vine-leaf", 2, {delay:0.5, x:-140, y: 40, scale:1}, 'start')
      .to("#blue-flower", 2, {delay:0.5, rotate: -20, x:-40, y: 40, scale:1}, 'start')
      .to("#hand-orange-flowers", 2, {delay:0.5, rotate: -10, x:70, scale:1}, 'start');

  var fadeIn = new TimelineLite();
      fadeIn
        .to(".fade", 3, {opacity:1, y:0 }, 1)
        .to(".fadeSecond", 2.5, {delay:2, opacity:1, y:0 }, 1)
        .to(".scroll", 3, {delay:3, opacity:1}, 1)
        .to("#intro .col-12 > p", 3, {delay:3, opacity:0.15 }, 1)
    //when tl is done, play handmovement
    tl.eventCallback("onComplete", function() {
      var handmovement = new TimelineLite({repeat: -1, yoyo: true});
      handmovement.to("#hand-orange-flowers", 5, {rotate: -2});
      
    });
  }

  var fadeInOpening = new TimelineLite();
  fadeInOpening
    .to("#opening .music", 3, {opacity:1, y:0 }, 1)

  //CONTINUOUS MOVEMENT ELEMENTS

  var redfloweropening = new TimelineLite({repeat: -1,defaults: { duration: 1 }, yoyo: true});
  redfloweropening.to("#red-flower-opening-stem", 3, {rotate: 3});

  var obscuratiohandorangeflowers = new TimelineLite({repeat: -1, defaults: {ease: "none" }, yoyo: true});
  obscuratiohandorangeflowers.to("#obscuratio-hand-orange-flowers", 3, {rotate: 5});

  var stemone = new TimelineLite({repeat: -1, defaults: { duration: 1, ease: "none" }, yoyo: true});
  stemone.to("#stem-one", 3, {rotate: 10});

  var stemtwo = new TimelineLite({repeat: -1,defaults: { duration: 1, ease: "none"}, yoyo: true});
  stemtwo.to("#stem-two", 3, {rotate: 10});

  var yellowflowerone = new TimelineLite({repeat: -1, defaults: { duration: 1 }, yoyo: true});
  yellowflowerone.to("#yellow-flower-1", 3, {rotate: 10});

  var yellowflowertwo = new TimelineLite({repeat: -1,defaults: { duration: 1 }, yoyo: true});
  yellowflowertwo.to("#yellow-flower-2", 3, {rotate: 10});

  var venenumlilyone = new TimelineLite({repeat: -1, defaults: { duration: 1 }, yoyo: true});
  venenumlilyone.to("#venenum-lily-stem-1", 3, {rotate: 10});

  var venenumlilytwo = new TimelineLite({repeat: -1,defaults: { duration: 1 }, yoyo: true});
  venenumlilytwo.to("#venenum-lily-stem-2", 3, {rotate: 10});

  var redflowersmall = new TimelineLite({repeat: -1,defaults: { duration: 1 }, yoyo: true});
  redflowersmall.to("#red-flower-small-main", 3, {rotate: -3});

  var butterflywing = new TimelineLite({repeat: -1,defaults: { duration: 1.5 , ease: "none"}, yoyo: true});
  butterflywing.to("#butterfly-wing", {rotate: -5});

  var butterflywing2 = new TimelineLite({repeat: -1,defaults: { duration: 2 , ease: "none"}, yoyo: true});
  butterflywing2.to("#butterfly-right-wing", {rotate: -5});

  var butterflywing3 = new TimelineLite({repeat: -1,defaults: { duration: 2 , ease: "none"}, yoyo: true});
  butterflywing3.to("#top-wing", {rotate: 5});

  var crepBottleBg = new TimelineLite({repeat: -3,defaults: { duration: 2 , ease: "none"}, yoyo: true});
  crepBottleBg.to("#crepusculum-bottle-bg", {rotate: 10});

  var circles = new TimelineLite({repeat: -1});
  circles
    .to("#circleone", 5, {x: -80, y: 200, opacity: 0}, 1)
    .to("#circletwo", 5, {delay:0.5, x: -70, y: 200, opacity: 0}, 1)
    .to("#circlethree", 5, {delay:2, x: -20, y: 200, opacity: 0}, 1)
    .to("#circlefour", 5, {delay:0.1, x: 20, y: 200, opacity: 0}, 1)
    .to("#circlefive", 5, {delay:0.3, x: 50, y: 200, opacity: 0}, 1)
    .to("#circlesix", 5, {delay:1.2, x: 85, y: 200, opacity: 0}, 1);


  gsap.to("#mirabilis-bottom-right-two", {keyframes: [
    {x: 3, y:0, rotate:1, duration: 1.5},
    {y: -3,rotate:2, duration: 1.5},,
    {x: -3, rotate:1,duration: 1.5},
    {y: -10, rotate:0, duration: 1.5},
  ], repeat:-1, yoyo:true});

  gsap.to("#mirabilis-bottom-left", {keyframes: [
    {x: 2, rotate:-2, duration: 1.5},
    {y: -2,rotate:1, duration: 1.5},
    {y:-5, rotate:0,duration: 1.5},,
    {y:3, rotate:-1,duration: 1.5},
    {rotate:1,duration: 1.5},
  ], repeat:-1, yoyo:true});

  gsap.to("#mirabilis-pop-a", {keyframes: [
    {y: -3, rotate:-3, duration: 2},
    {x: 2,rotate:-5, duration: 3},
    {y:-5, rotate:-1,duration: 2},
    {y:3, rotate:1,duration: 2},
    {rotate:2,duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#mirabilis-leaf-a", {keyframes: [
    {x: 3, rotate:-4, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#mirabilis-leaf-ab", {keyframes: [
    {x: 3, rotate:-50, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#octopus-image", {keyframes: [
    {x: 3, y: -6, rotate:-2, duration: 2},
    {x: -6, y: -1,rotate:2, duration: 2},
    {x: 5, y: 8,rotate:-4, duration: 2},
    {x: -6, y: 10, rotate:2, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#octopus-leg-1", {keyframes: [
    {x: 3, y: 2, rotate:3, duration: 2},
    {x: 8, y: 6,rotate:1, duration: 2},
    {x: 3, y: 7,rotate:-2, duration: 2},
    {x: 5, y: 1,rotate:1, duration: 2},
    {x: 0, y: 6, rotate:-1, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#octopus-leg-2", {keyframes: [
    {x: 3, y: -3, rotate:3, duration: 1},
    {x: 10, y: 6,rotate:-2, duration: 2},
    {x: 3, y: 8,rotate:4, duration: 1.3},
    {x: 5, y: -2,rotate:1, duration: 2},
    {x: -3, y: 6, rotate:-1, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#octopus-leg-3", {keyframes: [
    {x: -2, y: -4, rotate:-2, duration: 3},
    {x: 0, y: -10,rotate:1, duration: 3},
    {x: 2, y: 7,rotate:-2, duration: 3},
    {x: 1, y: 6, rotate:-1, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to("#octopus-leg-4", {keyframes: [
    {x: -2, y: -4, rotate:-2, duration: 2},
    {x: 0, y: -10,rotate:1, duration: 1},
    {x: 2, y: 12,rotate:-2, duration: 3},
    {x: 1, y: 6, rotate:-1, duration: 2},
  ], repeat:-1, yoyo:true});

  gsap.to(".octo-inner-container", {keyframes: [
    {x: 10, y: -9, rotate:-2, duration: 2},
    {x: 4, y: 14,rotate:1, duration: 2},
    {x: 8, y: -12,rotate:-2, duration: 3},
    {x: 0, y: 15, rotate:-1, duration: 2},
  ], repeat:-1, yoyo:true});


  gsap.to("#crep-tentacle-2-arm-1", {keyframes: [{rotate:-3.5, duration: 1.3},{rotate:3, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-2", {keyframes: [{rotate:-3, duration: 2},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-3", {keyframes: [{rotate:-6, duration: 1.5},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-4", {keyframes: [{rotate:4, duration: 2},{rotate:-5, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-5", {keyframes: [{rotate:-3, duration: 1},{rotate:3, duration: 2.4},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-6", {keyframes: [{rotate:7, duration: 3},{rotate:-3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-7", {keyframes: [{rotate:-3, duration: 2.5},{rotate:3, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-8", {keyframes: [{rotate:-6, duration: 2},{rotate:3, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-9", {keyframes: [{rotate:-4, duration: 1},{rotate:3, duration: 2.3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-10", {keyframes: [{rotate:3, duration: 1.5},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-11", {keyframes: [{rotate:-4, duration: 2},{rotate:3, duration: 2.5},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-12", {keyframes: [{rotate:-8, duration: 2.1},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-13", {keyframes: [{rotate:4.5, duration: 1.9},{rotate:3, duration: 2.3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-14", {keyframes: [{rotate:-4, duration: 2},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-2-arm-15", {keyframes: [{rotate:-3, duration: 1.5},{rotate:3, duration: 3},], repeat:-1, yoyo:true});

  gsap.to("#crep-tentacle-1-arm-1", {keyframes: [{rotate:-3.5, duration: 1.3},{rotate:3, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-2", {keyframes: [{rotate:-3, duration: 2},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-3", {keyframes: [{rotate:-6, duration: 1.5},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-4", {keyframes: [{rotate:4, duration: 2},{rotate:-5, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-5", {keyframes: [{rotate:-3, duration: 1},{rotate:3, duration: 2.4},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-6", {keyframes: [{rotate:7, duration: 3},{rotate:-3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-7", {keyframes: [{rotate:-3, duration: 2.5},{rotate:3, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-8", {keyframes: [{rotate:-6, duration: 2},{rotate:3, duration: 2},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-9", {keyframes: [{rotate:-4, duration: 1},{rotate:3, duration: 2.3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-10", {keyframes: [{rotate:3, duration: 1.5},{rotate:3, duration: 3},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-11", {keyframes: [{rotate:-4, duration: 2},{rotate:3, duration: 2.5},], repeat:-1, yoyo:true});
  gsap.to("#crep-tentacle-1-arm-12", {keyframes: [{rotate:-8, duration: 2.1},{rotate:3, duration: 3},], repeat:-1, yoyo:true});





  //VINES

  $(window).scroll(function(){
    function elementScrolled(elem)
    {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top + 100;
      return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    if(elementScrolled('#vine-svg-1')) {
      $('#vine-svg-1').addClass('animate');
    }
    if(elementScrolled('#vine-svg-2')) {
      $('#vine-svg-2').addClass('animate');
    }
    if(elementScrolled('#vine-svg-3')) {
      $('#vine-svg-3').addClass('animate');
    }
    if(elementScrolled('#vine-svg-4')) {
      $('#vine-svg-4').addClass('animate');
    }
    if(elementScrolled('#vine-svg-5')) {
      $('#vine-svg-5').addClass('animate');
    }
    if(elementScrolled('#vine-svg-6')) {
      $('#vine-svg-6').addClass('animate');
    } 
    if(elementScrolled('#quote-vine-svg-1')) {
      $('#quote-vine-svg-1').addClass('animate');
    } 

  });

// }
