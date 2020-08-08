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
      statusCode: { 
        0: function(data) { 
          //success
          $('#contact-form .form-success').addClass('active');
        },
        200: function(data) {
          //success
          $('#contact-form .form-success').text('active');
        },
        403: function(data) {
          //error
          alert('Oh no! something went wrong. Please try again.');
        }
      }  
    });
  });
  // Donate form
  $('#donate-form').submit(function(e) {
    e.preventDefault();
    
  });

  
});
async function start() {
try {
  const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1477, // $14.77, an easily identifiable amount
    currency: 'usd',
  });
  console.log('Worked! ', paymentIntent.id);
} catch(err) {
  console.log('Error! ', err.message);
}
}
