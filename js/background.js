$(function() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.active == "true") {
        chrome.browserAction.setIcon({"path": "../img/active.png"});
      } else if(request.active == "false") {
        chrome.browserAction.setIcon({"path": "../img/inactive.png"});
      }
    });
});