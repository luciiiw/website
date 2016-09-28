$( document ).ready(function() {
  function triangle() {
    $('#section-triangle').css("border-left", $( window ).width() + "px solid transparent");
    $('#section-triangle2').css("border-left", $(window).width() + "px solid white");
    $('#section-triangle3').css("border-left", $(window).width() + "px solid white");
  }
  triangle();

  $(window).on('resize', triangle);
});
