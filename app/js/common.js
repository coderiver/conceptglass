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

	// types
	(function () {
		var fp      = $('.js-fp');
		if (fp.length) {
			fp.fullpage({
				sectionSelector: '.js-fp-section',
				anchors:['beer', 'alcohol', 'drinks', 'souvenirs'],
				verticalCentered: false
				// sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
			});
		};
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