$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('body,html').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function() {
        window.location.hash = hash;
      });
    }
  });
});

var width = $(window).width();
window.onscroll = function() {
  // Background size adjustment for middle section on scroll
  if (width >= 900) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $("#middle").css("background-size", "150% auto");
    } else {
      $("#middle").css("background-size", "100% auto");
    }
  }
};

// Loading animation
setTimeout(function() {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function() {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1450);