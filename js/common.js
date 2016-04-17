$(function() {
	$(".servico").animated("zoomInUp", "sidelnUp");
	$(".information").animated("zoomInUp", "sidelnUp");

$("#toggle").click(function() {
  $(this).toggleClass("on");
  $(".default ul").slideToggle();
});

	$("a.scroll").click(function() {
		$.scrollTo($(".about"), 800, {
			offset: -90
		});
	});


	var $menu = $("#menu");    
	        $(window).scroll(function(){
	            if ( $(this).scrollTop() > 350 && $menu.hasClass("default") ){
	                $menu.fadeOut('fast',function(){
	                    $(this).removeClass("default")
	                           .addClass("fixed transbg")
	                           .fadeIn('fast');
	                });
	            } else if($(this).scrollTop() <= 350 && $menu.hasClass("fixed")) {
	                $menu.fadeOut('fast',function(){
	                    $(this).removeClass("fixed transbg")
	                           .addClass("default")
	                           .fadeIn('fast');
	                });
	            }
	        });//scroll

	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
