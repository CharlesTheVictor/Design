$('document').ready(function(){

	// setTimeout(function(){
	// 	$(".loading").remove();
	// }, 6200);

  $(".HomeText").click(function() {
     $(".HomePage").show();
		 $(".WorkPage").hide();

		 $('.grid').removeClass('scale');
		 $(".WorkDESC").hide();
		 $('.WorkReal').removeClass('IMGscale');
		 $('div[class^="module"]').removeClass('IMGscale');
		 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').show();
  }, );

	$(".LOGOVC").click(function() {
     $(".HomePage").show();
		 $(".WorkPage").hide();

		 $('.grid').removeClass('scale');
		 $(".WorkDESC").hide();
		 $('.WorkReal').removeClass('IMGscale');
		 $('div[class^="module"]').removeClass('IMGscale');
		 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').show();
  }, );

	$(".WorkText").click(function() {
		 $(".HomePage").hide();
		 $(".WorkPage").show();

		 $('.grid').removeClass('scale');
		 $(".WorkDESC").hide();
		 $('.WorkReal').removeClass('IMGscale');
		 $('div[class^="module"]').removeClass('IMGscale');
		 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').show();
	}, );

	$(".BackArrow").click(function() {
		 $(this).hide();
		 $('.grid').removeClass('scale');
		 $(".WorkDESC").hide();
		 $('.WorkReal').removeClass('IMGscale');
		 $('div[class^="module"]').removeClass('IMGscale');
		 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').show();
	}, );

	$(".IMGcarousel1").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.VANGUARD_DESC, .module1, .carousel_button').show();
			 $('.STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel2").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.STRESSSUCKS_DESC, .module2, .carousel_button').show();
			 $('.VANGUARD_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .module1, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel3").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.POLARIS_DESC, .module3, .carousel_button').show();
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .module1, .module2, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel4").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.SOLLEWITT_DESC, .module4, .carousel_button').show();
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .module1, .module2, .module3, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel5").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.ITRAINED_DESC, .module5, .carousel_button').show();
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .BADASSBAUHAUS_DESC, .module1, .module2, .module3, .module4, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel6").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.BADASSBAUHAUS_DESC, .module6, .carousel_button').show();
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .module1, .module2, .module3, .module4, .module5, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );



});
