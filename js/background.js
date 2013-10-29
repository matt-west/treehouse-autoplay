$(function() {
  chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.active == "true") {
        chrome.browserAction.setIcon({"path": "../img/active.png"});
        fs = localStorage["fullscreen"];
        sendResponse({fullscreen: fs});
      } else if(request.active == "false") {
        chrome.browserAction.setIcon({"path": "../img/inactive.png"});
        sendResponse({});
      } else {
        sendResponse({});
      }
    });
});