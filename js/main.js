; (function ($) {
	"use strict";

	$(document).ready(function () {

		var links = $('.ba-menu-link'),
				logo = $('.ba-logo-svg');
		
		$('#fullpage').fullpage({
			anchors: ['intro', 'work', 'about', 'contact'],

			afterLoad: function (anchorLink, index) {
				var loadedSection = $(this);

				if (anchorLink == 'intro' || anchorLink == 'about') {
					logo.removeClass('ba-active');
					links.removeClass('ba-active');
				} else{
					logo.addClass('ba-active');
					links.addClass('ba-active');
				}
			}
		});

		new TypeIt('.ba-intro__subtitle', {
			speed: 80,
			autoStart: false,
			cursor: false,
		})
			.type('Brand designer | ')
			.pause(400)
			.type('web designer')
	});


	// function initSlider() {
	// 	var slider = $('.ba-slider');
	// 	slider.slick({
	// 		slidesPerRow: 3,
	// 		rows: 2,
	// 		slide: '.ba-slide',
	// 		responsive: [
	// 			{
	// 				breakpoint: 620,
	// 				settings: {
	// 					slidesPerRow: 2,
	// 					rows: 2,
	// 					dots: true,
	// 					slide: '.ba-slide',
	// 				}
	// 			}
	// 		]
	// 	});
	// }

	// window.onload = initSlider;


	$('.ba-slider').slick({
		infinite: true,
		arrows: false,
		speed: 300,
		// slidesToShow: 4,
		// slidesToScroll: 4,
		slidesPerRow: 3,
		rows: 2,

		responsive: [
			{
				breakpoint: 500,
				settings: {
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					slidesPerRow: 1,
					rows: 1
				}
			},
			{
				breakpoint: 900,
				settings: {
					infinite: true,
					slidesPerRow: 2,
					rows: 2,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					infinite: true,
					slidesPerRow: 3,
					rows: 2,
				}
			}
		]
	});

})(jQuery);