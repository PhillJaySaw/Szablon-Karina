$(document).ready(function(){

  var navOffset = $("nav").position().top + 146;

  $("nav").wrap('<div class="nav-placeholder"></div>');
  $(".nav-placeholder").height($("nav").outerHeight())

  $("nav").wrapInner('<div class="nav-inner"></div>')

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= navOffset) {
      $("nav").addClass("fixed");
      $("nav ul li a").addClass("colorWh");
      $("nav ul").removeClass("border");
      $("nav ul li a").addClass("whiteBg");
    } else {
      $("nav").removeClass("fixed");
      $("nav ul li a").removeClass("colorWh");
      $("nav ul").addClass("border");
      $("nav ul li a").removeClass("whiteBg");

    }

  });

});
