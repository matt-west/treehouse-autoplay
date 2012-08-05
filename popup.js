$(function() {
  // Get Preferences
  var fullscreen = localStorage['fullscreen'];
  
  // Set the checkbox according to the preferences
  if (fullscreen == "true") {
    $("#fullscreen").prop("checked", true);
  }
  
  // Click listener to change fullscreen preference
  $('#fullscreen').live('change', function() {
    if($(this).is(':checked')){
      fullscreen = true;
      localStorage['fullscreen'] = true;
    } else {
      fullscreen = false;
      localStorage['fullscreen'] = false;
    }
  });
});