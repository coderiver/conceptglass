head.ready(function() {

	// menu
	(function () {
		var btn  = $('.js-menu-btn'),
			menu = $('.js-menu');
		btn.on('click', function () {
			btn.toggleClass('is-active');
			menu.toggleClass('is-visible');
		});
	}());

	// brands
	(function () {
		var brands = $('.js-brands');
		if (brands.length) {
			brands.slick({
				centerMode: true,
				variableWidth: true,
				infinity: true,
				swipe: false
			});
		};
	}());

	
});