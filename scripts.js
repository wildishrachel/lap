
// gsap.set('#snake', {xPercent:-50});

jQuery( document ).ready(function($) {
    var windowHeight = $(window).outerHeight();
    var headerHeight = $('header').outerHeight();

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

//BACK TO TOP BUTTON
jQuery(window).scroll(function($){
    var scrollPos = jQuery(document).scrollTop();
    if(scrollPos > 200) {
      jQuery('#top').addClass('show');
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

  //when tl is done, play handmovement
  tl.eventCallback("onComplete", function() {
    var handmovement = new TimelineLite({repeat: -1, yoyo: true});
    handmovement.to("#hand-orange-flowers", 5, {rotate: -2});
    var fadeIn = new TimelineLite();
    fadeIn
      .to(".fade", 3, {opacity:1, y:0 }, 1)
      .to(".fadeSecond", 2.5, {delay:2, opacity:1, y:0 }, 1)
      .to(".scroll", 3, {delay:4, opacity:1}, 1)
      .to("#intro .col-12 > p", 3, {delay:5, opacity:1 }, 1)

      fadeIn.eventCallback("onComplete", function() {
        var handmovement = new TimelineLite({repeat: -1, yoyo: true});
        handmovement.to("#hand-orange-flowers", 5, {rotate: -2});
      });
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

var crepBottleBg = new TimelineLite({repeat: -1,defaults: { duration: 5 , ease: "none"}, yoyo: true});
crepBottleBg.to("#crepusculum-bottle-bg", {rotate: 5});

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
seaCircles.to("#seacircleone", 8, {y: 200, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacircletwo", 8, {delay:0.5, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacirclethree", 8, {delay:2, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacirclefour", 8, {delay:0.1, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacirclefive", 8, {delay:0.3, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacirclesix", 8, {delay:1.2, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacircleseven", 8, {delay:0.5, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacircleeight", 8, {delay:0.2, y: -300, opacity: 0.1});

var seaCircles = new TimelineLite({repeat: -1});
seaCircles.to("#seacirclenine", 8, {delay:1, y: -300, opacity: 0.1});



//SCROLL TRIGGERED ELEMENTS

var homeSnake = gsap.timeline({
  scrollTrigger:{
    trigger: "#venenum",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=10000',
  }
})
.to('#home-snake', {rotation:-180, duration:10, ease:'none',});

var homeSnakeDesktop = gsap.timeline({
  scrollTrigger:{
    trigger: "#venenum",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=10000',
  }
})
.to('#home-snake-desktop', {rotation:-180, duration:10, ease:'none',});

var homeSnake = gsap.timeline({
  scrollTrigger:{
    trigger: "#venenum",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=10000',
  }
})
.to('#snake2', {rotation:-100,duration:15, ease:'none',});

var homeSnake2 = gsap.timeline({
  scrollTrigger:{
    trigger: "#venenum",
    pin: false,
    scrub:0.2,
    start: 'top bottom',
    end:'+=10000',
  }
})
.to('#snake2-desktop', {rotation:-180,duration:15, ease:'none'});


// BELOW INTRO
gsap.to("#yellow-flower-container", {scrollTrigger: "#yellow-flower-container", rotate: 10, duration: 4});

gsap.to("#red-flower-large-petal-right", {scrollTrigger: "#obscuratio .bottle-image", delay:1, rotate: 5, duration: 2 , y:-30});
gsap.to("#red-flower-large-petal-left", {scrollTrigger: "#obscuratio .bottle-image", delay:1, rotate: 0, duration: 2 , y:-30});
gsap.to("#red-flower-large", {scrollTrigger: "#obscuratio .bottle-image", delay:1, duration: 2, y:-30});

//HOME-Obscuratio
gsap.to("#obscuratio-bottle-bg", {scrollTrigger: "#obscuratio-container", delay:1, scale: 1, duration:2, startAt: { scale: 0.7 }, immediateRender: true });

gsap.to("#venenum-blue-flower-stem", {scrollTrigger: "#venenum-blue-flower", delay:0, duration:3, rotate:10 });
gsap.to("#venenum-blue-flower", {scrollTrigger: "#venenum-blue-flower", delay:0, duration:3, rotate:0 });

gsap.to("#butterfly", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:80, y:100});
gsap.to("#butterfly-wing", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:80, y:100});

gsap.to("#venenum-bg-left", {scrollTrigger: "#venenum-bottle", delay:1, x:-60, scale: 1, duration:2, startAt: { scale: 0.7 }, immediateRender: true });
gsap.to("#venenum-bg-right", {scrollTrigger: "#venenum-bottle", delay:1.5, x:60, scale: 1, duration:2, startAt: { scale: 0.7 }, immediateRender: true });

gsap.to("#mirabilis-bottle-bg", {scrollTrigger: "#mirabilis-container", delay:1, rotate: 0, duration: 2.5 });

gsap.to("#mirabilis-open-bud-petal-1", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });
gsap.to("#mirabilis-open-bud-petal-2", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });
gsap.to("#mirabilis-open-bud-petal-3", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });
gsap.to("#mirabilis-open-bud-petal-4", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 2 });

gsap.to("#mirabilis-leaf-left", {scrollTrigger: "#mirabilis-open-bud", delay:1, rotate: 0, duration: 3 });
gsap.to("#mirabilis-leaf-right", {scrollTrigger: "#mirabilis-leaf-left", delay:1, rotate: 0, duration: 3 });

gsap.to("#mirabilis-bottom-left", {scrollTrigger: "#tenebrae-top", y: 0, duration: 3, scale:1 });
gsap.to("#mirabilis-bottom-right", {scrollTrigger: "#tenebrae-top", delay:0.5, rotate:-5, y: 0, duration: 3, scale:1 });

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



