; (function ($) {
	"use strict";

	$(document).ready(function () {

		var links = $('.ba-menu-link'),
				logo = $('.ba-logo-svg'),
				burger = $('.burger-menu-open-svg');

		$('#fullpage').fullpage({
			anchors: ['intro', 'work', 'about', 'contact'],

			afterLoad: function (anchorLink, index) {
				var loadedSection = $(this);

				if (anchorLink == 'intro' || anchorLink == 'about') {
					logo.removeClass('ba-active');
					links.removeClass('ba-active');
					burger.removeClass('ba-active');
				} else{
					logo.addClass('ba-active');
					links.addClass('ba-active');
					burger.addClass('ba-active');
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
		adaptiveHeight: true,
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

	$('.ba-project__slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 300,
		adaptiveHeight: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	var burgerButton = document.querySelector('.burger-menu-open'),
	burgerCloseButton = document.querySelector('.burger-menu-close'),
	menuToggle = document.querySelector('.ba-mobile-menu');

	burgerButton.addEventListener('click', function(){
			menuToggle.classList.add('ba-show');
	});

	burgerCloseButton.addEventListener('click', function(){
		menuToggle.classList.remove('ba-show');
	});

	var mobUl = document.querySelectorAll('.ba-mobile-list a');
	//console.log(mobUl);
	
	mobUl.forEach(function(item){
		item.addEventListener('click', function () {
			menuToggle.classList.remove('ba-show');
		});
	});
	

})(jQuery);