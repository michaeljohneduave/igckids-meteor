Template.cover.rendered = function () {
	$('.slider-wrapper .slide:gt(0)').hide();
	setInterval(function () {
	    $('.slide:first-child').fadeOut('slow')
                             .next('.slide')
                             .fadeIn('slow')
                             .end()
                             .appendTo('.slider-wrapper');
	}, 10000); // 10 seconds

	$("#show-children").click(function() {
		$(".show-more-children").show("slow");
	});

	$("#testimonial-slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      items: 1
  });
}