window.addEventListener("beforeunload", event => {
	if (event.persisted) {
	audio.pause();
	audio.volume = 0;
}
}, false);