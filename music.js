
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

function checkCookieOnLoad() {
   if(getCookie("clicklink") === "yes") {
        openingVideoContainer.classList.add('hide');
        openingContainer.classList.add('hide');
        openingAnimations();
   } else {

   }
   hideOverlay.classList.add('hide');
}

//FADE IN/OUT MUSIC ON BUTTON CLICK

const playIconContainer = document.getElementById('play-icon');
const audioPlayerContainer = document.getElementById('audio-player-container');
var playState = 'pause';

playIconContainer.addEventListener('click', () => {
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

