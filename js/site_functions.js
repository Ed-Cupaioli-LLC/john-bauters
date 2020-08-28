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
  $('#contact-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSdBUbyKOEO_Nwr1huDCRB2t6qn0CZenRxIHjFyx61lEw9CaBQ/formResponse',     
      data: $('#contact-form').serialize(), 
      type: 'POST', 
      dataType: "json", 
       
    }).always(function() {
      $('#contact-form .form-success').addClass('active');
    });
  });

  $('.mobile-nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.nav-links').toggleClass('active');
  });
});

