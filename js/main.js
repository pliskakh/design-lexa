;(function($){
	"use strict";

	$(document).ready(function() {
		$('#fullpage').fullpage();

		new TypeIt('.ba-intro__subtitle', {
			speed: 100,
				autoStart: false,
				cursor: false,
			})
			.type('Brand designer | ')
				.pause(500)
				.type('web designer')
			});

})(jQuery);