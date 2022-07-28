
//COOKIE BEING SET

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function firstFunction(_callback){
    openingVideoContainer.classList.add('hide');
    openingContainer.classList.add('hide');
    // innerHomeContainer.classList.add('show');
    
    openingAnimations();

    const loader = gsap.timeline({
      onComplete: function() {
          scrollTriggered();
      }
    });
    _callback();
}


function checkCookieOnLoad() {
   if(getCookie("clicklink") == "yes") {
        
        firstFunction(function() {
            hideOverlay.classList.add('hide');
        }); 
        
   } else {
    console.log('no cookie found');
    hideOverlay.classList.add('hide');
   }
   
}

//FADE IN/OUT MUSIC ON BUTTON CLICK

const playIconContainer = document.getElementById('play-icon');
const audioPlayerContainer = document.getElementById('audio-player-container');
var playState = 'pause';

playIconContainer.addEventListener('click', function() {
    playMusic();
});


function playMusic() {

    let actualVolumeFadeOut = audio.volume;
    let actualVolumeFadeIn = 0;

    if(playState === 'play') {
        console.log("off");
        playState = 'pause';
        playIconContainer.classList.remove('playing');
        audio.pause();
        
        return false;

    } else {

        console.log("on");
        playState = 'play';
        playIconContainer.classList.add('playing');
        audio.play();
        audio.volume = 1;
          
        return false;
        
    }

}

const audio = document.getElementById('audio');

//PAUSE MUSIC ON VIDEO PLAY

var iframe = document.getElementById('video');
var player = new Vimeo.Player(iframe);

player.on('play', function() {
    playState = 'pause';
    playIconContainer.classList.remove('playing');
    audio.pause();
    audio.volume = 0;
});

