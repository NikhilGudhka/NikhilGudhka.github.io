/**
 * Created By Nikhil Gudhka 
 * Copyright © 2017 Nikhil Gudhka. All rights reserved.
 */

$(document).ready(function(){

	$('.fa-angle-down').click(function () {
		$('html,body').animate({
			scrollTop: $('#section1').offset().top},'slow');
	});

	$(window).scroll(function(){
		$('.hideMe').each(function(){
			var objectBottom = $(this).offset().top;
			var windowBottom = $(window).scrollTop() + $(window).height();

			if(windowBottom > objectBottom){
				$(this).animate({'opacity': 1}, 2000);
			}
		});
	});
});

