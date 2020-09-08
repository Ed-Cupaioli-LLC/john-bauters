$(function(){
  
  //Form Functions
  $('#form-overlay .close-form').click(function() {
    $('#form-overlay').removeClass('active');
  })
  $('.open-updates').click(function() {
    $('#contact-form').addClass('active');
    $('#form-overlay').addClass('active');
  });
  // Contact form 
  $('.update-form').submit(function(e) {
    e.preventDefault();
    var formId = $(this).attr('id');
    formId = "#"+formId;
    $.ajax({
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSe-iyg6KnTtvk1Tet43-4woEwZMMV_8gscEglLsLrpMkDVZOg/formResponse',     
      data: $(formId).serialize(), 
      type: 'GET',
      crossorigin: true 
    }).always(function() {
      $(formId+'.update-form .form-body').slideUp();
      $(formId+'.update-form .form-success').slideDown();
    });
  });
  //Nav functions
  $('.mobile-nav-toggle').click(function() {
    console.log('clicked');
    $(this).toggleClass('active');
    $('.nav-links').toggleClass('active');
  });
  
  $(window).on('scroll',function(e) {    
    console.log(e);
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $('#site-nav').addClass('sticky');
    } else {
      $('#site-nav').removeClass('sticky');
    }
  });
});

