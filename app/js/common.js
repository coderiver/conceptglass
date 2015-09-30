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
		var fp = $('.js-fp');
		if (fp.length) {
			fp.fullpage({
				sectionSelector: '.js-fp-section',
				anchors:['beer', 'alcohol', 'beverages', 'souvenirs'],
				verticalCentered: false
				// sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
			});
		};
	}());

	// brands
	(function () {
		var brands = $('.js-brands');
		if (brands.length) {
			var client      = brands.data('client'),
				activeSlide = $('.js-brands-item.' + client),
				index       = activeSlide.index();
			activeSlide.addClass('is-active');
			brands.slick({
				initialSlide: index,
				centerMode: true,
				variableWidth: true,
				infinity: true,
				swipe: false
			});
		};
	}());

	// go back
	(function () {
		$('.js-back').on('click', function () {
			window.history.back();
			return false;
		});
	}());

	// go top
	(function () {
		var btn = $('.js-go-top');
		btn.on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 500);
		});
	}());

	
});