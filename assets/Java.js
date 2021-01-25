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

	$(".LeftTitle").click(function() {
		location.reload();
		 $('.grid').removeClass('scale');
		 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
		 $('.WorkReal').removeClass('IMGscale');
		 $('#carousel_image img').removeClass('carouselscale');
		 $('div[class^="module"]').removeClass('IMGscale');
		 $('.carousel_button').hide();
		 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').show();
	}, );

	$(".IMGcarousel1").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.VANGUARD_DESC').addClass('CenterText');
			 $('.STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module1, .carousel_button').show();
			 $('.module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel2").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.STRESSSUCKS_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module2, .carousel_button').show();
			 $('.module1, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel3").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.POLARIS_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module3, .carousel_button').show();
			 $('.module1, .module2, .module4, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel4").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.SOLLEWITT_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module4, .carousel_button').show();
			 $('.module1, .module2, .module3, .module5, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel5").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.ITRAINED_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module5, .carousel_button').show();
			 $('.module1, .module2, .module3, .module4, .module6, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel6").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.BADASSBAUHAUS_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .FACEREC_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module6, .carousel_button').show();
			 $('.module1, .module2, .module3, .module4, .module5, .module7, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel7").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.WHATHAPPENED_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .GESTURAL_DESC, .FACEREC_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module7, .carousel_button').show();
			 $('.module1, .module2, .module3, .module4, .module5, .module6, .module8, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel8").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.GESTURAL_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .FACEREC_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module8, .carousel_button').show();
			 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module9, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel9").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.FACEREC_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .WFH_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module9, .carousel_button').show();
			 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module10, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );

	$(".IMGcarousel10").click(
		 function() {
			 $('.BackArrow').show();
			 $('.grid').addClass('scale');
			 $('.WorkReal').addClass('IMGscale');
			 $('.WFH_DESC').addClass('CenterText');
			 $('.VANGUARD_DESC, .STRESSSUCKS_DESC, .POLARIS_DESC, .SOLLEWITT_DESC, .ITRAINED_DESC, .BADASSBAUHAUS_DESC, .GESTURAL_DESC, .WHATHAPPENED_DESC, .FACEREC_DESC').removeClass('CenterText');
			 $('#carousel_image img').addClass('carouselscale');
			 $('div[class^="module"]').addClass('IMGscale');
			 $('.module10, .carousel_button').show();
			 $('.module1, .module2, .module3, .module4, .module5, .module6, .module7, .module8, .module9, .module11, .module12, .module13, .module14, .module15, .module16, .module17, .module18').hide();
	}, );




});
