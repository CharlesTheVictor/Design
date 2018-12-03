$('document').ready(function(){

  $(".CONCERNSBUTTON").click(function() {
     $(".CONCERNS").toggle();
		 $(".PRIVATE").hide();
  }, );

	$(".PRIVATEBUTTON").click(function() {
		 $(".PRIVATE").toggle();
		 $(".CONCERNS").hide();
	}, );


});
