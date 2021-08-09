//MUSIC COOKIE 

// document.getElementById("play-video-sound").addEventListener("click", setCookie);

function setCookie() {
  document.cookie =
  'lap=lap; expires=Thu, 2 Aug 2001 20:47:11 UTC; path=/'
  // alert("button was clicked");
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    // alert("button was clicked");
}

