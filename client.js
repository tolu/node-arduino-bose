(function (window, $, Swipe) {
	var commands = [
		undefined,
		"ON/OFF",
		"Vol Up",
		"Skip Rev",
		"Play / Pause",
		"Skip Fwd",
		"Vol Down",
		"Next Disc",
		"Video 1",
		"Video 2",
		"Aux",
		"CD",
		"AM/FM",
		"Tape",
		"Stop",
		"Mute",
		"Mute All",
		"Random",
		"Play",
		"Pause",
		"Fast Rev",
		"Fast Fwd",
		"Zone 1",
		"Zone 2",
		"Zone 3",
		"Zone 4",
		"Zone 5"
	];

	var app = {};

	function initSwipeSlider () {
		app.slider = Swipe($('#slider').get(0), {
			startSlide: 0,
			speed: 400,
			auto: 3000,
			continous: false,
			disableScroll: true,
			stopPropagation: false,
			callback: function (index, elem) {},
			transitionEnd: function (index, elem) {}
		});
		// swipe api: [prev(), next(), getPos(), getNumSlides(), slide(index, duration)]
	}

	function setupEventListeners () {
		$('button').on('click', onButtonClicked);
	}

	function onButtonClicked (e) {
		var cmd = $(this).data('cmd');
		console.log('You clicked : ' + commands[cmd]);
	}

	function init () {
		setupEventListeners();
		initSwipeSlider();
	}

	init();

	window.app = app;
}(window, jQuery, Swipe));