(function() {
  var $blocks = $('.block');
  var $search = $('#filter-search');
  var cache = [];

  $blocks.each(function() {
    cache.push({
      element: this,
      text: $(this).find("h2").text().toLowerCase()
    });
  });

  function filter() {
    var query = this.value.toLowerCase();
    cache.forEach(function(block) {
      var index = 0;

      if (query) {
        index = block.text.indexOf(query);
      }

      block.element.style.display = index === -1 ? 'none' : '';
    });
  }

  if ('oninput' in $search[0]) {
    $search.on('input', filter);
  } else {
    $search.on('keyup', filter);
  }              

}());