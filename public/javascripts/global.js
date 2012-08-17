jQuery(document).ready(function($){

		$('.project .top_button').click(function(){
			$.scrollTo(0, 400);
		});
		
		jQuery('.navigation span').click(function(){
			jQuery.scrollTo($(this).attr('id'), 400, {offset:-18});
		});
	});