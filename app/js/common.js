head.ready(function() {
	$('.team__title').click(function(event) {
		$(this).next().slideToggle();
	});
	$('.nav select').change(function(event) {
		$('.select__value span').text($(this).val());
		ind = $(".nav select")[0].selectedIndex;
		// $('.nav__link').eq(ind).trigger('click');
		var fp = $('.js-fp');
		fp.fullpage.moveTo(ind+1);
	});
	// menu
	(function () {
		var btn  = $('.js-menu-btn'),
			menu = $('.js-menu');
		btn.on('click', function () {
			btn.toggleClass('is-active');
			menu.toggleClass('is-visible');
			$('body').toggleClass('is-menu');
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