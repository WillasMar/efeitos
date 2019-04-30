$(function(){
	var ativo = '';
	
	$('.campo').bind('click', function(){
		ativo = $(this).attr('data-ativo');

		if(ativo == 'off'){
			$(this).find('label').addClass('label');
			$(this).attr('data-ativo','on');
			$(this).find('input').focus();
			$(this).css('box-shadow','0px 0px 3px 0px blue');
		}
	});

	$('input').bind('blur', function(){
		$(this).parent().find('label').removeClass('label');
		$(this).parent().attr('data-ativo','off');
		$(this).parent().css('box-shadow','0px 0px 0px 0px blue');
	});
});