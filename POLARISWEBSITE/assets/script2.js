$('document').ready(function(){

	setTimeout(function(){
		$(".loading").remove();
	}, 6200);

  $(".CONCERNSBUTTON").click(function() {
     $(".CONCERNS").toggle();
		 $(".PRIVATE").hide();
  }, );

	$(".PRIVATEBUTTON").click(function() {
		 $(".PRIVATE").toggle();
		 $(".CONCERNS").hide();
	}, );


});
