$(document).ready(function(){
	var $rows = $(".product");
	$(".form-control").keyup(function(e){
		var key = $(this).val();
		var val = $.trim(key).replace(/ +/g, ' ').toLowerCase();
		
		
		$rows.show().filter(function(){
			var text = $(this).find(".name").text().replace(/\s+/g, ' ').toLowerCase();
			var start = text.indexOf(val);
			var m = $(this).find(".name").text();
			$(this).find(".name").remove();
			console.log(m);
			//console.log(m[start]);
			if(start != -1){
				var text1 = m.substr(0,start);
				var text2 = m.substr(start+key.length,m.length);
				//console.log(text1 + "  " + key + "  " + text2);
				$(this).find(".hi").remove();
				
				var div = '<div class="name">' + text1 + '<span class="hi">'+ key + '</span>' + text2 + '</div>';
				//console.log(div);
				$(this).find(".product-description").prepend(div);
			}else{
				var div = '<div class="name">' + m + '</div>';
				$(this).find(".product-description").prepend(div);
			}
        return !~text.indexOf(val);
    	}).hide();
	});
});