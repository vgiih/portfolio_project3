$(function(){

	$('.mobile').click(function(){
		$('.mobile').find('ul').slideToggle();
	});

});

$(function(){

	$('nav a').click(function(){

		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html, body').animate({'scrollTop':offSetTop});

		return false;
	});

});

$(function(){

	var delay = 3000;
	var currentIndex = 0;
	var amt;

	initSlider();
	autoPlay();


	function initSlider(){
		amt = $('.author').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;


		$('.author').css('width',sizeBoxSingle+'%');
		$('.scroll-wrapper').css('width',sizeContainer+'%');
	
	
		for(var i = 0; i < amt; i++){
			if(i == 0){
				$('.slider-bullets').append('<span style="background-color:rgb(170, 170,170);"></span>');
			}
			else{
				$('.slider-bullets').append('<span></span>');
			}
		};
	};

	function autoPlay(){
		setInterval(function(){
			currentIndex++;
			if(currentIndex == amt){
				currentIndex = 0;
			};
			goToSlider(currentIndex);
		}, delay);
	};

	function goToSlider(currentIndex){
		var offSetX = $('.author').eq(currentIndex).offset().left - $('.scroll-wrapper').offset().left;

		$('.slider-bullets span').css('background-color', 'rgb(200, 200, 200)');
		$('.slider-bullets span').eq(currentIndex).css('background-color', 'rgb(170, 170, 170)')
		$('.scroll-team').animate({'scrollLeft':offSetX+'px'});
	};

	$(window).resize(function(){
		$('.scroll-team').stop().animate({'scrollLeft':0});
	});

});

// FORM

/*
$(function(){

		$('form').submit(function(){

			if(formularioPreenchido()){
					var form = $('form');
					$('form').ajaxSubmit({
						beforeSubmit:function(){
							form.find('input[type=submit]').attr('disabled','true');
							form.find('input[type=submit]').animate({'opacity':'0.4'})
							form.find('input[type=submit]').attr('value','Carregando');

						},
						success:function(data){
							//Aqui você pode inserir uma div, por exemplo.
							//Qualquer mensagem de sucesso, após o formulario ter sido enviado.
							alert('Formulário foi enviado com sucesso!');
							form.find('input[type=submit]').removeAttr('disabled');
							form.find('input[type=submit]').animate({'opacity':'1'})
							form.find('input[type=submit]').attr('value','Enviar');
							form[0].reset();
						}
					});
			}else{
				alert("Campos Vázios não são permitidos!");
			}



			return false;
		})

		function formularioPreenchido(){
			var nome = $('[name=nome]').val();
			var email = $('[name=email]').val();
			var telefone = $('[name=telefone]').val();
			var mensagem = $('[name=mensagem]').val();
			if(nome === '' || email === '' || telefone === '' || mensagem === ''){
				return false;
			}else{
				return true;
			}
		}


	})
*/