$(document).ready(function(){
	var $rows = $(".product");
	$(".form-control").keyup(function(e){
		var key = $(this).val();
		var val = $.trim(key).replace(/ +/g, ' ').toLowerCase();

    	$rows.filter(function(){
    	  var text = $(this).find(".name").text().replace(/\s+/g, ' ').toLowerCase(),
    	      start = text.indexOf(val),
    	      m = $(this).find(".name").text();
    	  $(this).find(".name").remove();
    	  if(start != -1){
    	    var text1 = m.substr(0,start),
    	        text2 = m.substr(start + key.length, m.length);
    	    $(this).find(".search-highlight").remove();
    	    var div = '<div class="name">' + text1 + '<span class="search-highlight">'+ key + '</span>' + text2 + '</div>';
    	    $(this).find(".product-description").prepend(div);
    	  } else {
    	    var div = '<div class="name">' + m + '</div>';
    	    $(this).find(".product-description").prepend(div);
    	  }
    	  return ~text.indexOf(val);
    	}).show(400);

    	$rows.filter(function(){
    	  var text = $(this).find(".name").text().replace(/\s+/g, ' ').toLowerCase(),
    	      start = text.indexOf(val),
    	      m = $(this).find(".name").text();
    	  $(this).find(".name").remove();
    	  if(start != -1){
    	    var text1 = m.substr(0,start),
    	        text2 = m.substr(start + key.length, m.length);
    	    $(this).find(".search-highlight").remove();
    	    var div = '<div class="name">' + text1 + '<span class="search-highlight">'+ key + '</span>' + text2 + '</div>';
    	    $(this).find(".product-description").prepend(div);
    	  } else {
    	    var div = '<div class="name">' + m + '</div>';
    	    $(this).find(".product-description").prepend(div);
    	  }
    	  return !~text.indexOf(val);
    	}).hide(400);
	});
});