
(function($) {
	$.fn.vmenuModule = function(option) {
		var obj,
			item;
		var options = $.extend({
				Speed: 220,
				autostart: false,
				autohide: 1
			},
			option);
		obj = $(this);

		item = obj.find("ul").parent("li").children("a");
		item.each(function() {
		
			if ($(this).attr("data-option") != "on") {
				$(this).attr("data-option", "off");
				
			}
			else
			{
				$(this).next().show();

				$(this).children('.fa').removeClass("fa-angle-right");
				$(this).next().attr("data-option", "on");
				$(this).children('.fa').addClass("fa-angle-down");
			}
			
		});

		item.unbind('click').on("click", function() {
			var a = $(this);
			if (options.autohide) {
				a.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(options.Speed / 1.2,
					function() {
						$(this).parent("li").children("a").attr("data-option", "off");
						$(this).parent("li").children("a").next().attr("data-option", "off");
						$(this).parent("li").children("a").children('.fa').removeClass("fa-angle-down");
						$(this).parent("li").children("a").children('.fa').addClass("fa-angle-right");

					})
			}
			if (a.attr("data-option") == "off") {
				a.parent("li").children("ul").slideDown(options.Speed,
					function() {
						a.attr("data-option", "on");
						a.next().attr("data-option", "on");
						a.children('.fa').addClass("fa-angle-down");
						a.children('.fa').removeClass("fa-angle-right");
					});
			}
			if (a.attr("data-option") == "on") {
				a.attr("data-option", "off");
				a.parent("li").children("ul").slideUp(options.Speed);
				a.children('.fa').addClass("fa-angle-down");
				a.children('.fa').removeClass("fa-angle-right");
			}
		});


	}
})(window.jQuery);