$(function() {

	// Set icon to active state
	chrome.extension.sendMessage({active: "true", fullscreen: "fetch"}, function(response) {
		// Full Screen support
		if (response.fullscreen == "true") {
			goFullscreen();
		}
	});
	
	var video = $("video")[0];
	if (video) {
		video.play();

		$(video).bind('timeupdate', function() {
			if (video.ended == true) {
				var videoURL = $('.steps-nav-next').attr('href');
				viewNextVideo(videoURL);
			}
		});
	}
	
	// Reset icon when we leave the page
	$(window).unload(function() {
		chrome.extension.sendMessage({active: "false"}, function(response) {});
	});
	
});

function viewNextVideo(url) {
	if (url != undefined) {
		window.location = url;
	}
}

function goFullscreen() {
	$('.mejs-fullscreen-button button').click();
}
