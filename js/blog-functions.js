$(function() {
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('search-results'),
    json: '/search.json'
  })
  var searchQuery = $('#search-input').val();
  sjs.search(searchQuery);
});