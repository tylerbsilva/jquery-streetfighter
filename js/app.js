$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		//play hadouken
		playHadouken();
		//show hadouken and animate it to the right
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
			  	{'left': '1020px'},
	 		  	500,
	  		  	function() {
	    			$(this).hide();
	    			$(this).css('left', '520px');
  				}
			);
	})
	.mouseup(function(){
		//ryu reverts to ready
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

$(document).keydown(function(x){
	if (x.keyCode == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
	}
}).keyup(function(x){
	if (x.keyCode == 88) {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
};