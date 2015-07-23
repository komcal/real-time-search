$(document).ready(function(){
	var $rows = $(".product");
	$(".form-control").keyup(function(e){
		var key = $(this).val();
		var val = $.trim(key).replace(/ +/g, ' ').toLowerCase();
		$rows.each(function(index, el) {
			var text = $(el).find(".name").text().replace(/\s+/g, ' ').toLowerCase(),
			    start = text.indexOf(val),
			    m = $(el).find(".name").text();
			$(el).find(".name").remove();
			if(start != -1){
			  var text1 = m.substr(0,start),
			      text2 = m.substr(start + key.length, m.length);
			  $(el).find(".search-highlight").remove();
			  var div = '<div class="name">' + text1 + '<span class="search-highlight">'+ key + '</span>' + text2 + '</div>';
			  $(el).find(".product-description").prepend(div);
			  $(el).show(400);
			} else {
			  var div = '<div class="name">' + m + '</div>';
			  $(el).find(".product-description").prepend(div);
			  $(el).hide(400);
			}
		});
	});
});