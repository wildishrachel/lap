
const openingDesktopiFrame = document.getElementById('opening-video-desktop');
const openingMobileiFrame = document.getElementById('opening-video-mobile');
const desktopPlayer = new Vimeo.Player(openingDesktopiFrame);
const mobilePlayer = new Vimeo.Player(openingMobileiFrame);

var playButton = document.getElementById('play-video-sound');
var playMuted = document.getElementById('play-video');
const skip = document.getElementById('skipbutton');
const openingVideoContainer = document.getElementById('opening-videos');
const openingContainer = document.getElementById('opening');
const hideOverlay = document.getElementById('overlay');
const innerHomeContainer = document.getElementById('inner-home-container');

<<<<<<< HEAD
const mirabilisBottleContainer = document.getElementById('mirabilis-bottle-container');




=======
>>>>>>> b33b775704936c2c89e9a9ce4501b0738d2298b6
gsap.registerPlugin(ScrollTrigger);
//PLAY DESKTOP OR MOBILE VIDEO 

//PLAY VIDEO WITH SOUND
playButton.addEventListener('click',function(){

  openingVideoContainer.classList.add('show');
  document.getElementById('opening').classList.add('hide');
  skip.classList.add('sound');

  if (jQuery(window).width() < 768) {
    mobilePlayer.play();
  }
  else {
    desktopPlayer.play(); 
  }

});

// PLAY VIDEO WITHOUT SOUND
playMuted.addEventListener('click',function(){

  openingVideoContainer.classList.add('show');
  document.getElementById('opening').classList.add('hide');

  if (jQuery(window).width() < 768) {
    mobilePlayer.play();
    mobilePlayer.ready().then(function() {
        mobilePlayer.setVolume(0);
    });
  }
  else {
    desktopPlayer.play();
    desktopPlayer.ready().then(function() {
        desktopPlayer.setVolume(0);
    });
  }
    
});

// SKIP
skip.addEventListener('click',function(){
  videoFinished();
});

desktopPlayer.on('ended', function() {
  videoFinished();
});
mobilePlayer.on('ended', function() {
  videoFinished();
});

function videoFinished() {
  openingVideoContainer.classList.remove('show');
  openingVideoContainer.classList.add('hide');
  innerHomeContainer.classList.add('show');
  desktopPlayer.pause();
  mobilePlayer.pause();
  if (skip.classList.contains('sound')) {
    playState = 'play';
    playIconContainer.classList.add('playing');
    audio.play();
    audio.volume = 1;
  }

  const loader = gsap.timeline({
<<<<<<< HEAD
      onComplete: function() {
=======
      onComplete: () => {
>>>>>>> b33b775704936c2c89e9a9ce4501b0738d2298b6
          scrollTriggered();
      }
  });
}


function scrollTriggered() {
  gsap.to("#obscuratio-bottle-bg", {scrollTrigger: "#obscuratio-container", delay:1, scale: 1, duration:2, startAt: { scale: 0.3 }, immediateRender: true });

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

<<<<<<< HEAD
  var mirabilisLeafB = gsap.timeline({
    onComplete: function() {
      mirabilisBottleContainer.classList.add('front');
    },
=======


  var mirabilisLeafB = gsap.timeline({
>>>>>>> b33b775704936c2c89e9a9ce4501b0738d2298b6
    scrollTrigger:{
      trigger: "#mirabilis",
      pin: false,
      scrub:0.2,
      start: 'top 300px bottom',
<<<<<<< HEAD
      end:'+=400',
    },
    
  })
  .to('#mirabilis-leaf-b', {rotation:-15, x:-300, ease:'linear'});


=======
      end:'+=900',
    }
  })
  .to('#mirabilis-leaf-b', {rotation:-15, x:-300, ease:'linear'});

>>>>>>> b33b775704936c2c89e9a9ce4501b0738d2298b6
  var mirabilisLeafC = gsap.timeline({
    scrollTrigger:{
      trigger: "#mirabilis",
      pin: false,
      scrub:0.2,
      start: 'top 500px bottom',
<<<<<<< HEAD
      end:'+=600',
=======
      end:'+=1100',
>>>>>>> b33b775704936c2c89e9a9ce4501b0738d2298b6
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
    onEnter: function() {
        openBudPetalOne.play()
        openBudPetalTwo.play()
        openBudPetalThree.play()
        openBudPetalFour.play()
        openBud.play()
    }

  });

  const resetOpenBudPetalOne = ScrollTrigger.create({
    trigger:'.mirabilis-open-bud-container',
    onLeaveBack: function() {
        openBudPetalOne.pause(0)
        openBudPetalTwo.pause(0)
        openBudPetalThree.pause(0)
        openBudPetalFour.pause(0)
        openBud.pause(0)
    }
  });

  gsap.to(".crep-tentacle-2", {scrollTrigger: "#crep-tentacle-2", delay:1, scale:1, y:3, x:0, duration:2});
  gsap.to(".crep-tentacle-1", {scrollTrigger: "#crep-tentacle-1", delay:1.5, scale:1, y:0, x:0, duration:3});

  gsap.to("#butterfly", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:130, y:130});
  gsap.to("#butterfly-wing", {scrollTrigger: "#arcana-rosa .bottle", duration:2, x:130, y:130});

  // BELOW INTRO
  gsap.to("#yellow-flower-container", {scrollTrigger: "#yellow-flower-container", rotate: 10, duration: 4});

  gsap.to("#red-flower-large-petal-right", {scrollTrigger: "#obscuratio .bottle-image", delay:1, rotate: 5, duration: 2 , y:-30});
  gsap.to("#red-flower-large-petal-left", {scrollTrigger: "#obscuratio .bottle-image", delay:1, rotate: 0, duration: 2 , y:-30});
  gsap.to("#red-flower-large", {scrollTrigger: "#obscuratio .bottle-image", delay:1, duration: 2, y:-30});

  //HOME-Obscuratio

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

  var sections = gsap.utils.toArray('.fadeIn');
  sections.forEach(function(section) {
    gsap.to(section, { autoAlpha: 1, y:0, duration: 2,
      scrollTrigger: {
          trigger: section,
          start: 'top bottom-=100',
          scrub: false,
          end: '+=500',
          // onRefresh: self => self.progress === 1 && self.animation.progress(1),
      }
    });
  });
}



