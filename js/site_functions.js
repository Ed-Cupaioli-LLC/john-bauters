$(function(){
  
  //Form Functions
  $('#form-overlay .close-form').click(function() {
    $('#form-overlay').removeClass('active');
  })
  $('.open-updates').click(function() {
    $('#contact-form').addClass('active');
    $('#form-overlay').addClass('active');
  });
  
  //Nav functions
  $('.mobile-nav-toggle').click(function() {
    console.log('clicked');
    $(this).toggleClass('active');
    $('.nav-links').toggleClass('active');
  });
  
  $(window).on('scroll',function(e) {    
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $('#site-nav').addClass('sticky');
    } else {
      $('#site-nav').removeClass('sticky');
    }
  });
  $('a[href^=#]').click(function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('body,html').animate({
      scrollTop: $(anchor).offset().top - 108
    });
  });
});

