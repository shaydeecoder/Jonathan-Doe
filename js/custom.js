// INITIALIAZING AOS ANIMATION
AOS.init();

// FACTS
$(function(){
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
});

// PORTFOLIO
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$(function() {
  $("#portfolio").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{
      enabled:true
    }
  });
});