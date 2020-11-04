$(document).ready(function(){
	AOS.init();
	$('[data-bs-hover-animate]')
		.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
		.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });

(function(){

	if(!('requestAnimationFrame' in window)) return;
	if(/Mobile|Android/.test(navigator.userAgent)) return;

	var backgrounds = [];

	$('[data-bs-parallax-bg]').each(function(){
		var el = $(this);
		var bg = $('<div>');

		bg.css({
			backgroundImage: el.css('background-image'),
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			position: 'absolute',
			height:'200%',
			width:'100%',
			top:0, left:0,
			zIndex: -100
		});

		bg.appendTo(el);
		backgrounds.push(bg[0]);

		el.css({
			position:'relative',
			background:'transparent',
			overflow: 'hidden',
		});
	});

	if(!backgrounds.length) return;

	var visible = [];
	var scheduled;

	$(window).on('scroll resize', scroll);

	scroll();

	function scroll(){

		visible.length = 0;

		for(var i = 0; i < backgrounds.length; i++){
			var rect = backgrounds[i].parentNode.getBoundingClientRect();

			if(rect.bottom > 0 && rect.top < window.innerHeight){
				visible.push({
					rect: rect,
					node: backgrounds[i]
				});
			}

		}

		cancelAnimationFrame(scheduled);

		if(visible.length){
			scheduled = requestAnimationFrame(update);
		}

	}

	function update(){
    // Code for perfect timing. [Complete code not mentioned to reduce chances of direct copy.]

	}

})();
});
