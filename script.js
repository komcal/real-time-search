(function () {
	'use strict';
	var LiveSearchBox = function (container, params) {
	  if (!(this instanceof LiveSearchBox)) return new LiveSearchBox(params);

	  var defaults = {
	    itemClass: '.item',
	    textClass: '.name',
	    searchBoxClass: '.search-box',
	    highlightClass: 'search-highlight',
	    highlightColor: '#FFFF00',
	    animationTime: 400,
	  };

	  params = params || {};
	  for (var def in defaults) {
	    if (typeof params[def] === 'undefined') {
	      params[def] = defaults[def];
	    }
	    else if (typeof params[def] === 'object') {
	      for (var deepDef in defaults[def]) {
	        if (typeof params[def][deepDef] === 'undefined') {
	          params[def][deepDef] = defaults[def][deepDef];
	        }
	      }
	    }
	  }

	  var lsb = this;
	  lsb.params = params;

	  lsb.container = $(container);
	  if (lsb.container.length === 0) return;
	  if (lsb.container.length > 1) {
	    lsb.container.each(function () {
	      new LiveSearchBox(this, params);
	    });
	    return;
	  }

	  var $items = $(lsb.params.itemClass);
	  $(lsb.params.searchBoxClass).keyup(function(e) {
	    var textSearch = $(this).val(),
	    		textSearchTrim = $.trim(textSearch).replace(/ +/g, ' ').toLowerCase();
	    $items.each(function(index, el) {
	      var textItem = $(el).find(lsb.params.textClass).text(),
	      		textItemTrim = textItem.replace(/\s+/g, ' ').toLowerCase(),
			      textIndex = textItemTrim.indexOf(textSearchTrim),
			      newTextItem = textItem;
	      if (textIndex != -1) {
	        var textBeforeHighlight = textItem.substr(0, textIndex),
	        		textAfterHighlight = textItem.substr(textIndex + textSearchTrim.length, textItem.length);
	        newTextItem = textBeforeHighlight + '<span class="' + lsb.params.highlightClass + '">' + textSearch + '</span>' + textAfterHighlight;
	        $(el).show(lsb.params.animationTime);
	      } else {
	        $(el).hide(lsb.params.animationTime);
	      }
	      $(el).find(lsb.params.textClass).html(newTextItem);
	    });
	  });
	};

	$(document).ready(function() {
	  var liveSearchBox = new LiveSearchBox('#search', {
	    itemClass: '.product',
	    textClass: '.name',
	    searchBoxClass: '.form-control',
	    highlightClass: 'search-highlight',
	    highlightColor: '#FFFF00',
	    animationTime: 400,
	  });
	});
})();
