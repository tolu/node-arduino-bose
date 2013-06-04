(function () {
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


	function setupEventListeners () {
		$('button').on('click', onButtonClicked);
	}

	function onButtonClicked (e) {
		var cmd = $(this).data('cmd');
		console.log('You clicked : ' + commands[cmd]);
	}

	setupEventListeners();

	return app;
}());