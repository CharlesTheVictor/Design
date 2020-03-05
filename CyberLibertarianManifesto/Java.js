$('document').ready(function(){

	$('.fakeClose1').click(function() {
     $(".panel:last").hide('fast', function() {
    // Use arguments.callee so we don't need a named function
    $( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
  }, );

	$('.fakeClose2').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose3').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose4').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose5').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose6').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
	$('#navigation').hide();
	$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose7').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
	$('#navigation').remove();
	$('.EXHIBITBOX').show();

	}, );

	$('.fakeClose8').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose9').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose10').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose11').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose12').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose13').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose14').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$('.fakeClose15').click(function() {
		 $(".panel:last").hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});
		$('#navigation').hide();
		$('.EXHIBITBOX').show();
	}, );

	$(".EXHIBITBOX").click(function() {
		 document.location.reload();
	}, );


  $('.fakeZoom1').click(
     function() {
		 $('.page').removeClass('__transitional');
     $('.panel:last').show('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().show( "fast", arguments.callee );
	});
	   }, );

	$('.fakeMinimize1').click(
     function() {
     $('.panel').removeClass('scale');
		 $('.panel:last').hide('fast', function() {
		// Use arguments.callee so we don't need a named function
		$( this ).prev().hide( "fast", arguments.callee );
	});  }, );

	$('.fakeZoom2').click(
     function() {
     $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
     $('.panel--1, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').hide();
  }, );

	$('.fakeMinimize2').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom3').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize3').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom4').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').hide();
		 $('.scaletext15').show();
	}, );

	$('.fakeMinimize4').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').show();
		 $('.scaletext15').hide();
	}, );

	$('.fakeZoom5').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').hide();
		 $('.scaletext15').show();
	}, );

	$('.fakeMinimize5').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').show();
		 $('.scaletext15').hide();
	 	}, );

	$('.fakeZoom6').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').hide();
		 $('.scaletext15').show();
	}, );

	$('.fakeMinimize6').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').show();
		 $('.scaletext15').hide();
	}, );

	$('.fakeZoom7').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').hide();
		 $('.scaletext15').show();
	}, );

	$('.fakeMinimize7').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').show();
		 $('.scaletext15').hide();
	}, );

	$('.fakeZoom8').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').hide();
		 $('.scaletext15').show();
	}, );

	$('.fakeMinimize8').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, .noscaletext15, #navigation').show();
		 $('.scaletext15').hide();
	}, );

	$('.fakeZoom9').click(
		 function() {
		 $('.panel').toggleClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize9').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom10').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize10').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--11, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom11').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize11').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--12, .panel--13, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom12').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--13, .panel--14, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize12').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--13, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom13').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--14, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize13').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--14, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom14').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--15, #navigation').hide();
	}, );

	$('.fakeMinimize14').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--15, #navigation').show();
	}, );

	$('.fakeZoom15').click(
		 function() {
		 $('.panel').addClass('scale');
		 $('.page').removeClass('__transitional');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, #navigation').hide();
	}, );

	$('.fakeMinimize15').click(
		 function() {
		 $('.panel').removeClass('scale');
		 $('.panel--1, .panel--2, .panel--3, .panel--4, .panel--5, .panel--6, .panel--7, .panel--8, .panel--9, .panel--10, .panel--11, .panel--12, .panel--13, .panel--14, #navigation').show();
	}, );

});
