
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


//PLAY DESKTOP OR MOBILE VIDEO 

//PLAY VIDEO WITH SOUND
playButton.addEventListener('click',function(){

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

function videoFinished() {
  openingVideoContainer.classList.add('hide');
  desktopPlayer.pause();
  mobilePlayer.pause();
  if (skip.classList.contains('sound')) {
    playState = 'play';
    playIconContainer.classList.add('playing');
    audio.play();
    audio.volume = 1;
  }
}



