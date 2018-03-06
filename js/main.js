// c91001 red
// ffcc00 yellow
// 0066ff blue
// 99cc33 green
// 999999 gray

$(document).ready(function() {
	$('.ce-countdown-1').countEverest({
		// Set your target date here!
		day: 22,
		month: 3,
		year: 2018,
		hour: 8,
		leftHandZeros: false,
		onChange: function() {
			drawCircle1($('#ce-days-1').get(0), this.days, 365);
			drawCircle2($('#ce-hours-1').get(0), this.hours, 24);
			drawCircle3($('#ce-minutes-1').get(0), this.minutes, 60);
			drawCircle4($('#ce-seconds-1').get(0), this.seconds, 60);
		}
	});

	function deg(v) {
		return (Math.PI/180) * v - (Math.PI/2);
	}

	function drawCircle1(canvas, value, max) {
		var	primaryColor = '#ffcc00',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
		
	function drawCircle2(canvas, value, max) {
		var	primaryColor = '#0066ff',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

	function drawCircle3(canvas, value, max) {
		var	primaryColor = '#99cc33',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();

	}

	function drawCircle4(canvas, value, max) {
		var	primaryColor = '#999999',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

// ** 2nd Event **

	$('.ce-countdown-2').countEverest({
		// Set your target date here!
		day: 10,
		month: 4,
		year: 2018,
		hour: 8,
		leftHandZeros: false,
		onChange: function() {
			drawCircle1($('#ce-days-2').get(0), this.days, 365);
			drawCircle2($('#ce-hours-2').get(0), this.hours, 24);
			drawCircle3($('#ce-minutes-2').get(0), this.minutes, 60);
			drawCircle4($('#ce-seconds-2').get(0), this.seconds, 60);
		}
	});

	function deg(v) {
		return (Math.PI/180) * v - (Math.PI/2);
	}

	function drawCircle1(canvas, value, max) {
		var	primaryColor = '#c91001',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
		
	function drawCircle2(canvas, value, max) {
		var	primaryColor = '#0066ff',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

	function drawCircle3(canvas, value, max) {
		var	primaryColor = '#99cc33',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();

	}

	function drawCircle4(canvas, value, max) {
		var	primaryColor = '#999999',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

// ** 3rd Event **

	$('.ce-countdown-3').countEverest({
		// Set your target date here!
		day: 15,
		month: 6,
		year: 2018,
		hour: 8,
		leftHandZeros: false,
		onChange: function() {
			drawCircle1($('#ce-days-3').get(0), this.days, 365);
			drawCircle2($('#ce-hours-3').get(0), this.hours, 24);
			drawCircle3($('#ce-minutes-3').get(0), this.minutes, 60);
			drawCircle4($('#ce-seconds-3').get(0), this.seconds, 60);
		}
	});

	function deg(v) {
		return (Math.PI/180) * v - (Math.PI/2);
	}

	function drawCircle1(canvas, value, max) {
		var	primaryColor = '#ffcc00',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
		
	function drawCircle2(canvas, value, max) {
		var	primaryColor = '#c91001',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

	function drawCircle3(canvas, value, max) {
		var	primaryColor = '#99cc33',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();

	}

	function drawCircle4(canvas, value, max) {
		var	primaryColor = '#999999',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

//  ** 4TH EVENT ********************************

	$('.ce-countdown-4').countEverest({
		// Set your target date here!
		day: 23,
		month: 7,
		year: 2018,
		hour: 8,
		leftHandZeros: false,
		onChange: function() {
			drawCircle1($('#ce-days-4').get(0), this.days, 365);
			drawCircle2($('#ce-hours-4').get(0), this.hours, 24);
			drawCircle3($('#ce-minutes-4').get(0), this.minutes, 60);
			drawCircle4($('#ce-seconds-4').get(0), this.seconds, 60);
		}
	});

	function deg(v) {
		return (Math.PI/180) * v - (Math.PI/2);
	}

	function drawCircle1(canvas, value, max) {
		var	primaryColor = '#ffcc00',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
		
	function drawCircle2(canvas, value, max) {
		var	primaryColor = '#0066ff',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

	function drawCircle3(canvas, value, max) {
		var	primaryColor = '#99cc33',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();

	}

	function drawCircle4(canvas, value, max) {
		var	primaryColor = '#999999',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

//  ** 5TH EVENT ********************************

	$('.ce-countdown-5').countEverest({
		// Set your target date here!
		day: 12,
		month: 9,
		year: 2018,
		hour: 8,
		leftHandZeros: false,
		onChange: function() {
			drawCircle1($('#ce-days-5').get(0), this.days, 365);
			drawCircle2($('#ce-hours-5').get(0), this.hours, 24);
			drawCircle3($('#ce-minutes-5').get(0), this.minutes, 60);
			drawCircle4($('#ce-seconds-5').get(0), this.seconds, 60);
		}
	});

	function deg(v) {
		return (Math.PI/180) * v - (Math.PI/2);
	}

	function drawCircle1(canvas, value, max) {
		var	primaryColor = '#ffcc00',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
		
	function drawCircle2(canvas, value, max) {
		var	primaryColor = '#0066ff',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}

	function drawCircle3(canvas, value, max) {
		var	primaryColor = '#99cc33',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();

	}

	function drawCircle4(canvas, value, max) {
		var	primaryColor = '#999999',
			secondaryColor = 'rgba(0,0,0,.1)',
			circle = canvas.getContext('2d');
		
		circle.clearRect(0, 0, canvas.width, canvas.height);
		circle.lineWidth = 36;

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			false);
		circle.strokeStyle = secondaryColor;
		circle.stroke();

		circle.beginPath();
		circle.arc(
			canvas.width / 2, 
			canvas.height / 2, 
			canvas.width / 2 - circle.lineWidth, 
			deg(0), 
			deg(360 / max * (max - value)), 
			true);
		circle.strokeStyle = primaryColor;
		circle.stroke();
	}
});