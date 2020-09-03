$(function() {
  if (window.location.href.indexOf('#') > -1) {
    $('body,html').animate({
      scrollTop: $(window.location.hash).offset().top - 108
    });
  }
});