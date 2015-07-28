$(document).ready(function() {
  var $items = $(".product");
  $(".form-control").keyup(function(e) {
    var textSearch = $(this).val(),
    		textSearchTrim = $.trim(textSearch).replace(/ +/g, ' ').toLowerCase();
    $items.each(function(index, el) {
      var textItem = $(el).find(".name").text(),
      		textItemTrim = textItem.replace(/\s+/g, ' ').toLowerCase(),
		      textIndex = textItemTrim.indexOf(textSearchTrim),
		      newTextItem = textItem;
      if (textIndex != -1) {
        var textBeforeHighlight = textItem.substr(0, textIndex),
        		textHighlight = textItem.substr(textIndex, textIndex + textSearchTrim.length);
        		textAfterHighlight = textItem.substr(textIndex + textSearchTrim.length, textItem.length);
        newTextItem = textBeforeHighlight + '<span class="search-highlight">' + textHighlight + '</span>' + textAfterHighlight;
        $(el).show(400);
      } else {
        $(el).hide(400);
      }
      $(el).find(".name").html(newTextItem);
    });
  });
});
