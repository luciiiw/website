$( document ).ready(function() {
  function triangle() {
    $('#section-triangle').css("border-left", $( window ).width() + "px solid transparent" );
  }
  triangle();

  $(window).on('resize', triangle);
});
