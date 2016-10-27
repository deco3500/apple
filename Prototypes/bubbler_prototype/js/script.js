$(document).ready(function(){

	$('body').click(function(e){
		var target =$(e.target), article;
		if (target.is('.vote-r')||
			target.is('.vote-l')||
			target.is('.vote-n')){
		$(".voter").css('width', '1000px');
			if (target.is('.vote-l')){
				$(".vote-l").css('width', '400px');
				$(".vote-n").css('width','300px');
				$(".vote-r").css('width', '200px');
			} else if (target.is('.vote-n')){
				$(".vote-l").css('width', '200px');
				$(".vote-n").css('width','400px');
				$(".vote-r").css('width', '300px');
			} else if (target.is('.vote-r')){
				$(".vote-l").css('width', '200px');
				$(".vote-n").css('width','300px');
				$(".vote-r").css('width', '400px');
			}
		}
	});
	$(".goback").click(function(){
		$(".voter").css('width', '310px');
		$(".vote-l").css('width', '100px');
		$(".vote-n").css('width','100px');
		$(".vote-r").css('width', '100px');
	});
});