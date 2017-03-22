$(document).ready(
	function(){
		$('nav').onePageNav({
			scrollThreshold: 0.1
		});
	

	function toggleMenu(){
		// do something
		$('nav').toggle();
	}

$('#menu-button').click(toggleMenu);

// at mobile size, remove style attribute from nav text

$(window).resize(function(){

	var width = $(window).width()
	if (width>768){
		$('nav').removeAttr('style');
	}

});

var firstData = true;

function updatePieData() {
	var x = [
 	["Link",	2000],
	["Photo",	2000],
	["Status",	2000],
	["Video",	2000]
    ];

    if (firstData) {
		firstData = false;
		drawPie(x);
	} else {
		firstData = true;
		drawPie(displayData);
	};

};

$('#NextPie').click(updatePieData);

});



