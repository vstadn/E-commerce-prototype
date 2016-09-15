(function() {
  var $blocks = $('.block');
  var $body = $("body");
  var $exitimg = $(".large-block-items-hidden");
  var cache = [];

  $blocks.each(function() {
    cache.push({
      element: this,
      text: $(this).find("h2").text().toLowerCase()
    });
  });

  function openElement()
  {
    if (this.className == "block")
    {
      $(this).toggleClass("block");
      $(this).toggleClass("large-block");
      $body.toggleClass("unlocked");
      $body.toggleClass("locked");
      $exitimg.toggleClass("large-block-items-hidden");
      $exitimg.toggleClass("large-block-items-shown");
    }
  }

  function closeBlock()
  {
    var $block = $(".large-block");
    $block.toggleClass("block");
    $block.toggleClass("large-block");
    $body.toggleClass("unlocked");
    $body.toggleClass("locked");
    $exitimg.toggleClass("large-block-items-hidden");
    $exitimg.toggleClass("large-block-items-shown");
  }

  $blocks.on("click", openElement);
  $exitimg.on("click", closeBlock);

}());