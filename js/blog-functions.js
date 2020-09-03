$(function() {
  if ($('#search-input').length > 0) {
    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('search-results'),
      json: '/search.json'
    })
    var searchQuery = $('#search-input').val();
    sjs.search(searchQuery);
  }
  

  $('.share-link.facebook').click(function(e) {
    e.preventDefault();
    var shareLink = $(this).attr('href');
    FB.ui({
      method: 'share',
      href: shareLink
    }, function(response){});
  });

  $('.share-link.copy').click(function(e) {
    e.preventDefault();
    console.log('clicked copy');
    var copyText = $(this).find('.copy-text');
    console.log(copyText.val());
    copyText.focus();
    copyText.select();
    copyText[0].setSelectionRange(0, 99999); 
    document.execCommand("copy");
    $(this).addClass('active');
    var $this = $(this);
    setTimeout(function() {
      $this.removeClass('active');
    }, 1000);
  });
});