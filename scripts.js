
// gsap.set('#snake', {xPercent:-50});

jQuery( document ).ready(function($) {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

    $('#overlay').addClass('hide');

    resizeIntro();

    //FRAGRANCE NOTES
    $('.perfume').each(function(){
      $(this).find('.view').click(function(){        
        $(this).closest('.parent-container').find('.outer-container').toggleClass('toggle');
        $(this).closest('.parent-container').toggleClass('toggle');
      })
    });

    $('#slideOut').find('a').on('click', function() {
      $('.perfume .parent-container .outer-container').removeClass('toggle');
      $('.perfume .parent-container').removeClass('toggle');
      $("#slideOut").removeClass('showSlideOut');
      $('.slideOutTab').removeClass('active');
      $('#discover').removeClass('open');
      $('.fragrance-container').removeClass('in');
    });

    //FRAGRANCE NOTES
    $('#tenebrae').each(function(){
      $(this).find('.view').click(function(){        
        $(this).closest('.perfume').toggleClass('overflow-bottom');
      })
    });

});

jQuery( window ).resize(function($) {
  resizeIntro();
});

function resizeIntro() {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

    var twentyWindow = windowHeight / 100 * 20;

    $('#intro .intro-top').height(windowHeight - twentyWindow);
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
      jQuery('.slideoutbuttons').addClass('scrolled');
    } else {
      jQuery('#top').removeClass('show');
      jQuery('.slideoutbuttons').removeClass('scrolled');
    }


});

//ANIMATIONS

gsap.registerPlugin(ScrollTrigger);

//HEADER ELEMENTS

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

var crepusculummirabile = gsap.timeline({ scrollTrigger:{
    trigger: "#crepusculum-mirabile",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=5000',
  }
})
.to('#crep-front', {yPercent:-100,duration:10, ease:'none'}, 1);


//SCROLL TRIGGERED ELEMENTS

var homeSnake = gsap.timeline({
  scrollTrigger:{
    trigger: "#venenum",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=5000',
  }
})
.to('#home-snake', {rotation:-180, duration:5, ease:'none',});

// var homeSnakeDesktop = gsap.timeline({
//   scrollTrigger:{
//     trigger: "#venenum",
//     pin: false,
//     scrub:0.2,
//     start: 'top bottom',
//     end:'+=10000',
//   }
// })
gsap.to('#home-snake-desktop', {rotation:-180, duration:50, ease:'none', repeat:-1, yoyo:true});

var homeSnake = gsap.timeline({
  scrollTrigger:{
    trigger: "#venenum",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=5000',
  }
})
.to('#snake2', {rotation:-100,duration:5, ease:'none',});

// var homeSnake2 = gsap.timeline({
//   scrollTrigger:{
//     trigger: "#venenum",
//     pin: false,
//     scrub:0.2,
//     start: 'top bottom',
//     end:'+=10000',
//   }
// })
gsap.to('#snake2-desktop', {rotation:-180,duration:40, ease:'none', repeat:-1, yoyo:true});



var mirabilisLeafB = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top 300px bottom',
    end:'+=900',
  }
})
.to('#mirabilis-leaf-b', {rotation:-15, x:-300, ease:'linear'});

var mirabilisLeafC = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top 500px bottom',
    end:'+=1100',
  }
})
.to('#mirabilis-leaf-c', {rotation:2,x:250, y:-50, ease:'linear'});

var mirabilisBottleDesktop = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top -100px bottom',
    end:'+=500',
  }
})
.to('#mirabilis-desktop-bottle', 1, {opacity:1, ease:'linear'});

var mirabilisBottleDesktop = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top 0px bottom',
    end:'+=250',
  }
})
.to('#mirabilis-mobile-bottle', 1, {opacity:1, ease:'linear'});


var octoContainer = gsap.timeline({
  scrollTrigger:{
    trigger: "#octopus-image",
    pin: false,
    scrub:0.2,
    start: 'top 1000px bottom',
    end:'+=2500',
  }
})
.to('.octo-container', 1, {x:0});


const openBudPetalOne = gsap.to('#mirabilis-open-bud-petal-1', {rotate: 0, duration: 2, paused: true });
const openBudPetalTwo = gsap.to("#mirabilis-open-bud-petal-2", {rotate: 0, duration: 2, paused: true });
const openBudPetalThree = gsap.to("#mirabilis-open-bud-petal-3", {rotate: 0, duration: 2, paused: true });
const openBudPetalFour = gsap.to("#mirabilis-open-bud-petal-4", {rotate: 0, duration: 2, paused: true });
const openBud = gsap.to(".mirabilis-open-bud-container", {y:0, duration: 2, paused: true });

const playOpenBudPetalOne = ScrollTrigger.create({
  trigger:'.mirabilis-open-bud-container', 
  start:'top 700px', 
  onEnter: () => {
      openBudPetalOne.play()
      openBudPetalTwo.play()
      openBudPetalThree.play()
      openBudPetalFour.play()
      openBud.play()
  }
});

const resetOpenBudPetalOne = ScrollTrigger.create({
  trigger:'.mirabilis-open-bud-container',
  onLeaveBack: () => {
      openBudPetalOne.pause(0)
      openBudPetalTwo.pause(0)
      openBudPetalThree.pause(0)
      openBudPetalFour.pause(0)
      openBud.pause(0)
  }
});


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

gsap.to(".crep-tentacle-2", {scrollTrigger: "#crep-tentacle-2", delay:1, scale:1, y:3, x:0, duration:2});


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

gsap.to(".crep-tentacle-1", {scrollTrigger: "#crep-tentacle-1", delay:1.5, scale:1, y:0, x:0, duration:3});

gsap.to("#butterfly", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:130, y:130});
gsap.to("#butterfly-wing", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:130, y:130});

// BELOW INTRO
gsap.to("#yellow-flower-container", {scrollTrigger: "#yellow-flower-container", rotate: 10, duration: 4});

gsap.to("#red-flower-large-petal-right", {scrollTrigger: "#obscuratio .bottle-image", delay:1, rotate: 5, duration: 2 , y:-30});
gsap.to("#red-flower-large-petal-left", {scrollTrigger: "#obscuratio .bottle-image", delay:1, rotate: 0, duration: 2 , y:-30});
gsap.to("#red-flower-large", {scrollTrigger: "#obscuratio .bottle-image", delay:1, duration: 2, y:-30});

//HOME-Obscuratio
gsap.to("#obscuratio-bottle-bg", {scrollTrigger: "#obscuratio-container", delay:1, scale: 1, duration:2, startAt: { scale: 0.3 }, immediateRender: true });

gsap.to("#venenum-blue-flower-stem", {scrollTrigger: "#venenum-blue-flower", delay:0, duration:3, rotate:10 });
gsap.to("#venenum-blue-flower", {scrollTrigger: "#venenum-blue-flower", delay:0, duration:3, rotate:0 });

gsap.to("#venenum-bg-left", {scrollTrigger: "#venenum-bottle", delay:1, x:-60, scale: 1, duration:2, startAt: { scale: 0.7 }, immediateRender: true });
gsap.to("#venenum-bg-right", {scrollTrigger: "#venenum-bottle", delay:1.5, x:60, scale: 1, duration:2, startAt: { scale: 0.7 }, immediateRender: true });

gsap.to("#tenebrae-right-8", {scrollTrigger: "#tenebrae-right-5", x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-7", {scrollTrigger: "#tenebrae-right-5", delay:0.4, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-6", {scrollTrigger: "#tenebrae-right-5", delay:0.8, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-5", {scrollTrigger: "#tenebrae-right-5", delay:1.2, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-4", {scrollTrigger: "#tenebrae-right-5", delay:1.6, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-3", {scrollTrigger: "#tenebrae-right-5", delay:2, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-2", {scrollTrigger: "#tenebrae-right-5", delay:2.4,x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-1", {scrollTrigger: "#tenebrae-right-5", delay:2.8,x: 0, duration: 2, scale:1 });

gsap.to("#tenebrae-left-8", {scrollTrigger: "#tenebrae-left-5", x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-7", {scrollTrigger: "#tenebrae-left-5", delay:0.4, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-6", {scrollTrigger: "#tenebrae-left-5", delay:0.8, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-5", {scrollTrigger: "#tenebrae-left-5", delay:1.2, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-4", {scrollTrigger: "#tenebrae-left-5", delay:1.6, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-3", {scrollTrigger: "#tenebrae-left-5", delay:2, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-2", {scrollTrigger: "#tenebrae-left-5", delay:2.4,x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-1", {scrollTrigger: "#tenebrae-left-5", delay:2.8,x: 0, duration: 2, scale:1 });

gsap.to("#tenebrae-center-11", {scrollTrigger: "#tenebrae-left-5", duration: 2, scale:1 });
gsap.to("#tenebrae-center-10", {scrollTrigger: "#tenebrae-left-5", delay: 0.4, duration: 2, scale:1 });
gsap.to("#tenebrae-center-9", {scrollTrigger: "#tenebrae-left-5", delay: 0.8, duration: 2, scale:1 });
gsap.to("#tenebrae-center-8", {scrollTrigger: "#tenebrae-left-5", delay: 1.2, duration: 2, scale:1 });
gsap.to("#tenebrae-center-7", {scrollTrigger: "#tenebrae-left-5", delay: 1.6, duration: 2, scale:1 });
gsap.to("#tenebrae-center-6", {scrollTrigger: "#tenebrae-left-5", delay: 2, duration: 2, scale:1 });
gsap.to("#tenebrae-center-5", {scrollTrigger: "#tenebrae-left-5", delay: 2.4, duration: 2, scale:1 });
gsap.to("#tenebrae-center-4", {scrollTrigger: "#tenebrae-left-5", delay: 2.4, duration: 2, scale:1 });
gsap.to("#tenebrae-center-3", {scrollTrigger: "#tenebrae-left-5", delay: 2.8, duration: 2, scale:1 });
gsap.to("#tenebrae-center-2", {scrollTrigger: "#tenebrae-left-5", delay: 3.2, duration: 2, scale:1 });
gsap.to("#tenebrae-center-1", {scrollTrigger: "#tenebrae-left-5", delay: 3.6, duration: 2, scale:1 });


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


