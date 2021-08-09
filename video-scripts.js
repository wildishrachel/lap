
const openingDesktopiFrame = document.getElementById('opening-video-desktop');
const desktopPlayer = new Vimeo.Player(openingDesktopiFrame);
var playButton = document.getElementById('play-video-sound');
var playMuted = document.getElementById('play-video');
const skip = document.getElementById('skipbutton');
const openingVideoContainer = document.getElementById('opening-videos');
const openingContainer = document.getElementById('opening');
const hideOverlay = document.getElementById('overlay');

//PLAY VIDEO WITH SOUND
playButton.addEventListener('click',function(){
    document.getElementById('opening').classList.add('hide');
    desktopPlayer.play();
    skip.classList.add('sound');
});

// PLAY VIDEO WITHOUT SOUND
playMuted.addEventListener('click',function(){
    document.getElementById('opening').classList.add('hide');
    desktopPlayer.play();
    desktopPlayer.ready().then(function() {
        desktopPlayer.setVolume(0);
    });
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
  if (skip.classList.contains('sound')) {
    playState = 'play';
    playIconContainer.classList.add('playing');
    audio.play();
    audio.volume = 1;
  }
}

