Template.cover.rendered = function () {
	$('.slider-wrapper .slide:gt(0)').hide();
	setInterval(function () {
	    $('.slide:first-child').fadeOut('slow')
                             .next('.slide')
                             .fadeIn('slow')
                             .end()
                             .appendTo('.slider-wrapper');
	}, 10000); // 10 seconds
}