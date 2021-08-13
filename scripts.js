
// gsap.set('#snake', {xPercent:-50});

jQuery( document ).ready(function($) {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

    resizeIntro();

    //FRAGRANCE NOTES
    $('.perfume').each(function(){
      $(this).find('.view').click(function(){        
        $(this).closest('.parent-container').find('.outer-container').toggleClass('toggle');
        $(this).closest('.parent-container').toggleClass('toggle');
      })
    });

    //FRAGRANCE NOTES
    $('#tenebrae').each(function(){
      $(this).find('.view').click(function(){        
        $(this).closest('.perfume').toggleClass('overflow-bottom');
      })
    });

    // $(this).scrollTop(0);

});

jQuery( window ).resize(function($) {
  resizeIntro();
});

function resizeIntro() {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

    var twentyWindow = windowHeight / 100 * 10;

    $('#intro .intro-top').height(windowHeight - twentyWindow);
}

//BACK TO TOP BUTTON
jQuery(window).scroll(function($){
    var scrollPos = jQuery(document).scrollTop();
    if(scrollPos > 200) {
      jQuery('#top').addClass('show');
      jQuery('.scroll').css('opacity',0);
      jQuery('#intro .col-12 > p').css('opacity',1);
    } else {
      jQuery('#top').removeClass('show');
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
    

      // fadeIn.eventCallback("onComplete", function() {
      //   var handmovement = new TimelineLite({repeat: -1, yoyo: true});
      //   handmovement.to("#hand-orange-flowers", 5, {rotate: -2});
      // });
  });
}

var fadeInOpening = new TimelineLite();
fadeInOpening
  .to("#opening .music", 3, {opacity:1, y:0 }, 1)

//CONTINUOUS MOVEMENT ELEMENTS

var redfloweropening = new TimelineLite({repeat: -1,defaults: { duration: 1 }, yoyo: true});
redfloweropening.to("#red-flower-opening-stem", 3, {rotate: 3});

var obscuratiohandorangeflowers = new TimelineLite({repeat: -1, defaults: {ease: "none" }, yoyo: true});
obscuratiohandorangeflowers.to("#obscuratio-hand-orange-flowers", 5, {rotate: 2});

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

var arcanavine = new TimelineLite({repeat: -1,defaults: { duration: 1}, yoyo: true});
arcanavine.to("#av1", 3, {rotate: -3});

var arcanavine2 = new TimelineLite({repeat: -1,defaults: { duration: 1,  repeatDelay: 1}, yoyo: true});
arcanavine2.to("#av2", 4, {rotate: -10});

var arcanavine3 = new TimelineLite({repeat: -1,defaults: { duration: 1, y:-5, x:-4}, yoyo: true});
arcanavine3.to("#av3", 3, {rotate: -2});

var arcanavine4 = new TimelineLite({repeat: -1,defaults: { duration: 2,}, yoyo: true});
arcanavine4.to("#av4", 6, {rotate: -7});

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

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleone", 22, {y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircletwo", 27, {delay:0.5, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclethree", 23, {delay:2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclefour", 29, {delay:0.1, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclefive", 21, {delay:0.3, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclesix", 30, {delay:1.2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleseven", 24, {delay:0.5, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleeight", 19, {delay:0.2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclenine", 22, {delay:1, y: -2000, opacity: 0});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleonesecond", 22, {delay: 8, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircletwosecond", 27, {delay:8.5, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclethreesecond", 23, {delay:10, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclefoursecond", 29, {delay:8.1, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclefivesecond", 21, {delay:8.3, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclesixsecond", 30, {delay:9.2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclesevensecond", 24, {delay:8.5, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleeightsecond", 19, {delay:8.2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleninesecond", 22, {delay:9, y: -2000, opacity: 0});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleonethird", 22, {delay: 15, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircletwothird", 27, {delay:15.5, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclethreethird", 23, {delay:17, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclefourthird", 29, {delay:15.1, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclefivethird", 21, {delay:15.3, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacirclesixthird", 30, {delay:16.2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleseventhird", 24, {delay:15.5, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleeightthird", 19, {delay:15.2, y: -2000, opacity: 0});
var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to(".seacircleninethird", 22, {delay:16, y: -2000, opacity: 0});



var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenone", 8, {x: -100, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollentwo", 5, {x: -60, delay:0.5, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenthree", 7, {x: -20, delay:2, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenfour", 3, {x: 0, delay:0.1, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenfive", 5, {x: 30, delay:0.3, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollensix", 6, {x: 70, delay:1.2, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenseven", 4, {x:100, delay:0.5, y: -700, opacity: 0, ease:'circ'});

var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenonesecond", 8, {delay: 1.5, x: -100, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollentwosecond", 5, {x: -60, delay:2.5, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenthreesecond", 6, {x: -20, delay:4, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenfoursecond", 3, {x: 0, delay:2.1, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollenfivesecond", 5, {x: 30, delay:2.8, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollensixsecond", 6, {x: 70, delay:3.2, y: -700, opacity: 0, ease:'circ'});
var pollenCircles = new TimelineLite({repeat: -1});
pollenCircles.to(".pollensevensecond", 4, {x:100, delay:3.5, y: -700, opacity: 0, ease:'circ'});


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
    start: 'top 100px bottom',
    end:'+=900',
  }
})
.to('#mirabilis-leaf-b', {rotation:-15, x:-300, ease:'linear'});

var mirabilisLeafC = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top 300px bottom',
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
.to('#mirabilis-desktop-bottle', 1, {scale:1, opacity:1, ease:'linear'});

var mirabilisBottleDesktop = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top 0px bottom',
    end:'+=250',
  }
})
.to('#mirabilis-mobile-bottle', 1, {scale:1, opacity:1, ease:'linear'});

var mirabilisAnimationBottleDesktop = gsap.timeline({
  scrollTrigger:{
    trigger: "#mirabilis",
    pin: false,
    scrub:0.2,
    start: 'top -100px bottom',
    end:'+=500',
  }
})
.to('#mirabilis-animation-bottle', 1, {scale:1, ease:'linear'});


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


// const mirabilisClosedBud = gsap.to("#mirabilis-bottom-right-two", {scale: 1, y:0, duration: 2, paused: true });

// const playMirabilisClosedBud = ScrollTrigger.create({
//   trigger:'.mirabilis-closed-buds', 
//   start:'top 700px', 
//   onEnter: () => {
//       mirabilisClosedBud.play()
//   }
// });

// const resetMirabilisClosedBud = ScrollTrigger.create({
//   trigger:'.mirabilis-closed-buds',
//   onLeaveBack: () => {
//       mirabilisClosedBud.pause(0)
//   }
// });

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

gsap.to("#crep-bottle-bg", {keyframes: [
  {x: -2, y: -4, rotate:38, duration: 3},
  {x: -6, y: -9, rotate:32, duration: 4},
], repeat:-1, yoyo:true, ease:'power1'});

gsap.to("#crep-bottle-bg-2", {keyframes: [
  {x: -2, y: -4, rotate:-33, duration: 2},
  {x: 3, y: 6, rotate:-28, duration: 3},
], repeat:-1, yoyo:true});


jQuery( document ).ready(function($) {
  if ($(window).width() > 991) {

    gsap.to(".butterfly-animation", {scrollTrigger: "#butterfly", keyframes: [
      {x: 210, y: 450, duration: 1, ease:'linear'},
      {x: 270, y: 480, duration: 1.2},
      {x: 280, y: 560, duration: 1},

    ]});

  } else {
    gsap.to("#butterfly", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:80, y:100});
    gsap.to("#butterfly-wing", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:80, y:100});
  }

});




// var closedBuds = gsap.timeline({ scrollTrigger:{
//     trigger: "#mirabilis-desktop-bottle",
//     scrub: true,
//     start: 'top',
//     end:'+=1600',
//   }
// }).to('#mirabilis-closed-buds', {yPercent:-100,duration:6, ease:'none'});



// const openFlowerA = gsap.to("#tenebrae-top-a", {scale:1, duration: 2, paused: true });
// const openFlowerB = gsap.to("#tenebrae-top-b", {scale:1, duration: 3, paused: true });
// const openFlowerC = gsap.to("#tenebrae-top-c", {scale:1, duration: 2.5, paused: true });
// const openFlowerD = gsap.to("#tenebrae-top-d", {scale:1, duration: 2, paused: true });
// const openFlowerE = gsap.to("#tenebrae-top-e", {scale:1, duration: 2, paused: true });
// const openFlowerF = gsap.to("#tenebrae-top-f", {scale:1, duration: 3.5, paused: true });
// const openFlowerG = gsap.to("#tenebrae-top-g", {scale:1, duration: 2, paused: true });
// const openFlowerH = gsap.to("#tenebrae-top-h", {scale:1, duration: 2.5, paused: true });
// const openFlowerI = gsap.to("#tenebrae-top-i", {scale:1, duration: 2, paused: true });
// const openFlowerJ = gsap.to("#tenebrae-top-j", {scale:1, duration: 1.5, paused: true });
// const openFlowerK = gsap.to("#tenebrae-top-k", {scale:1, duration: 2, paused: true });
// const openFlowerM = gsap.to("#tenebrae-top-m", {scale:1, duration: 3.5, paused: true });
// const openFlowerN = gsap.to("#tenebrae-top-n", {scale:1, duration: 2, paused: true });
// const openFlowerO = gsap.to("#tenebrae-top-o", {scale:1, duration: 2, paused: true });
// const openFlowerP = gsap.to("#tenebrae-top-p", {scale:1, duration: 1, paused: true });
// const openFlowerQ = gsap.to("#tenebrae-top-q", {scale:1, duration: 4, paused: true });
// const openFlowerR = gsap.to("#tenebrae-top-r", {scale:1, duration: 5, paused: true });
// const openFlowerS = gsap.to("#tenebrae-top-s", {scale:1, duration: 2, paused: true });
// const openFlowerT = gsap.to("#tenebrae-top-t", {scale:1, duration: 2, paused: true });
// const openFlowerU = gsap.to("#tenebrae-top-u", {scale:1, duration: 2, paused: true });
// const openFlowerV = gsap.to("#tenebrae-top-v", {scale:1, duration: 2, paused: true });
// const openFlowerW = gsap.to("#tenebrae-top-w", {scale:1, duration: 2, paused: true });
// const openFlowerX = gsap.to("#tenebrae-top-x", {scale:1, duration: 2, paused: true });
// const openFlowerY = gsap.to("#tenebrae-top-y", {scale:1, duration: 2, paused: true });
// const openFlowerZ = gsap.to("#tenebrae-top-z", {scale:1, duration: 2, paused: true });
// const openFlowerAA = gsap.to("#tenebrae-top-aa", {scale:1, duration: 2, paused: true });
// const openFlowerAB = gsap.to("#tenebrae-top-ab", {scale:1, duration: 2, paused: true });
// const openFlowerAC = gsap.to("#tenebrae-top-ac", {scale:1, duration: 2, paused: true });
// const openFlowerAD = gsap.to("#tenebrae-top-ad", {scale:1, duration: 2, paused: true });
// const openFlowerAE = gsap.to("#tenebrae-top-ae", {scale:1, duration: 2, paused: true });
// const openFlowerAF = gsap.to("#tenebrae-top-af", {scale:1, duration: 2, paused: true });
// const openFlowerAG = gsap.to("#tenebrae-top-ag", {scale:1, duration: 2, paused: true });
// const openFlowerAH = gsap.to("#tenebrae-top-ah", {scale:1, duration: 2, paused: true });
// const openFlowerAI = gsap.to("#tenebrae-top-ai", {scale:1, duration: 2, paused: true });
// const openFlowerAJ = gsap.to("#tenebrae-top-aj", {scale:1, duration: 2, paused: true });
// const openFlowerAK = gsap.to("#tenebrae-top-ak", {scale:1, duration: 2, paused: true });


// const playOpenFlower = ScrollTrigger.create({
//   trigger:'.tenebrae-top', 
//   start:'top 700px', 
//   onEnter: () => {
//       openFlowerA.play()
//       openFlowerB.play()
//       openFlowerC.play()
//       openFlowerD.play()
//       openFlowerE.play()
//       openFlowerF.play()
//       openFlowerG.play()
//       openFlowerH.play()
//       openFlowerI.play()
//       openFlowerJ.play()
//       openFlowerK.play()
//       openFlowerM.play()
//       openFlowerN.play()
//       openFlowerO.play()
//       openFlowerP.play()
//       openFlowerQ.play()
//       openFlowerR.play()
//       openFlowerS.play()
//       openFlowerT.play()
//       openFlowerU.play()
//       openFlowerV.play()
//       openFlowerW.play()
//       openFlowerX.play()
//       openFlowerY.play()
//       openFlowerZ.play()
//       openFlowerAA.play()
//       openFlowerAB.play()
//       openFlowerAC.play()
//       openFlowerAD.play()
//       openFlowerAE.play()
//       openFlowerAF.play()
//       openFlowerAG.play()
//       openFlowerAH.play()
//       openFlowerAI.play()
//       openFlowerAJ.play()
//       openFlowerAK.play()
//   }
// });

// const resetOpenFlower = ScrollTrigger.create({
//   trigger:'.tenebrae-top',
//   onLeaveBack: () => {
//       openFlowerA.pause(0)
//       openFlowerB.pause(0)
//       openFlowerC.pause(0)
//       openFlowerD.pause(0)
//       openFlowerE.pause(0)
//       openFlowerF.pause(0)
//       openFlowerG.pause(0)
//       openFlowerH.pause(0)
//       openFlowerI.pause(0)
//       openFlowerJ.pause(0)
//       openFlowerK.pause(0)
//       openFlowerM.pause(0)
//       openFlowerN.pause(0)
//       openFlowerO.pause(0)
//       openFlowerP.pause(0)
//       openFlowerQ.pause(0)
//       openFlowerR.pause(0)
//       openFlowerS.pause(0)
//       openFlowerT.pause(0)
//       openFlowerU.pause(0)
//       openFlowerV.pause(0)
//       openFlowerW.pause(0)
//       openFlowerX.pause(0)
//       openFlowerY.pause(0)
//       openFlowerZ.pause(0)
//       openFlowerAA.pause(0)
//       openFlowerAB.pause(0)
//       openFlowerAC.pause(0)
//       openFlowerAD.pause(0)
//       openFlowerAE.pause(0)
//       openFlowerAF.pause(0)
//       openFlowerAG.pause(0)
//       openFlowerAH.pause(0)
//       openFlowerAI.pause(0)
//       openFlowerAJ.pause(0)
//       openFlowerAK.pause(0)
//   }
// });

// gsap.to("#mirabilis-open-bud-petal-1", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });
// gsap.to("#mirabilis-open-bud-petal-2", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });
// gsap.to("#mirabilis-open-bud-petal-3", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });
// gsap.to("#mirabilis-open-bud-petal-4", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });


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

gsap.to("#mirabilis-bottle-bg", {scrollTrigger: "#mirabilis-container", delay:1, rotate: 0, duration: 2.5 });



gsap.to("#mirabilis-leaf-left", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 3 });
gsap.to("#mirabilis-leaf-right", {scrollTrigger: "#mirabilis-leaf-left", delay:1, rotate: 0, duration: 3 });

// gsap.to("#mirabilis-bottom-left", {scrollTrigger: "#tenebrae-top", y: 0, duration: 3, scale:1 });
// gsap.to("#mirabilis-bottom-right", {scrollTrigger: "#tenebrae-top", delay:0.5, rotate:-5, y: 0, duration: 3, scale:1 });

gsap.to("#tenebrae-right-4", {scrollTrigger: "#tenebrae-right-5", x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-3", {scrollTrigger: "#tenebrae-right-5", delay:0.6, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-2", {scrollTrigger: "#tenebrae-right-5", delay:1.2,x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-right-1", {scrollTrigger: "#tenebrae-right-5", delay:1.8,x: 0, duration: 2, scale:1 });

gsap.to("#tenebrae-left-4", {scrollTrigger: "#tenebrae-left-5", x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-3", {scrollTrigger: "#tenebrae-left-5", delay:0.6, x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-2", {scrollTrigger: "#tenebrae-left-5", delay:1.2,x: 0, duration: 2, scale:1 });
gsap.to("#tenebrae-left-1", {scrollTrigger: "#tenebrae-left-5", delay:1.4,x: 0, duration: 2, scale:1 });

gsap.to("#tenebrae-center-5", {scrollTrigger: "#tenebrae-left-5", duration: 2, scale:1 });
gsap.to("#tenebrae-center-4", {scrollTrigger: "#tenebrae-left-5", duration: 2, scale:1 });
gsap.to("#tenebrae-center-3", {scrollTrigger: "#tenebrae-left-5", delay:0.6, duration: 2, scale:1 });
gsap.to("#tenebrae-center-2", {scrollTrigger: "#tenebrae-left-5", delay:1.2, duration: 2, scale:1 });
gsap.to("#tenebrae-center-1", {scrollTrigger: "#tenebrae-left-5", delay:1.4, duration: 2, scale:1 });

// gsap.to(".octo-container", {scrollTrigger: "#octopus-image", x:0, duration:7});


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
  

  // if(elementScrolled('#butterfly')) {
  //   $('#butterfly').addClass('butterfly-animation');
  //   $('#butterfly-wing').addClass('butterfly-animation');
  // }

});





