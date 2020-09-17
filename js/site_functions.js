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
  // Mailchimp API 9d509d30cf6c52a850b0d37521950352-us2
  $('.update-form').submit(function(e) {
    e.preventDefault();
    var formId = $(this).attr('id');
    formId = "#"+formId;
    $.ajax({
      url: 'https://johnbauters.us2.list-manage.com/subscribe/post?u=d1f6edf445667bd79d1370688&amp;id=8d8f66dcce',     
      data: $(formId).serialize(), 
      type: 'POST',
      crossorigin: true,
      success: function(data) {
        console.log(data);
      },
      error: function(data) {
        console.log(data);
      }
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

