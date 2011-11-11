$(function() {
	
	var nextVideo;
	
	var video = $("video")[0];
	video.play();
	
	$(video).bind('timeupdate', function() {
		if (video.ended == true) {
			viewNextVideo(nextVideo);
		}
	})
	
	var list = $(".dropdown ul");
	var currentTitle = $("h1")[0].innerText;

	var numVideos = list.children().length;
	var saveVideo = false;
	
	for (i = 0; i < numVideos; i++) {
		vid = list.children('li')[i];
		
		if (saveVideo == true) {
			nextVideo = vid.children[0].href;
			saveVideo = false;
		}
		
		if (vid.innerText == currentTitle) {
			saveVideo = true;
		}
	}
	
});

function viewNextVideo(url) {
	if (url != undefined) {
		window.location = url;
	}
}