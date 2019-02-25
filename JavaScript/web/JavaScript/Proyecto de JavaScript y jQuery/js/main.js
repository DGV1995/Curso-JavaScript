"use strict"

$(document).ready(function() {

	// Slider
	$('.galeria').bxSlider({
	   mode: 'fade',
	   captions: true,
	   slideWidth: 1200
	});

	//Posts
	var posts = [
		{
			title: "Prueba de título",
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mi sit amet malesuada mollis. Sed in ultrices urna, non tincidunt nibh. Aenean mi dui, ultricies non cursus eu, faucibus sed nisi. Proin sed condimentum ligula. Sed sagittis volutpat tempor. Praesent nec euismod risus. Etiam sed urna non mauris pellentesque maximus non et sapien. Donec pretium hendrerit sagittis. Mauris in lacus et orci pulvinar elementum. Vivamus massa dolor, semper ut consequat sed, facilisis at quam. Pellentesque malesuada est vel diam volutpat scelerisque. Curabitur dapibus rhoncus commodo. Nulla euismod lorem odio, eu venenatis ligula commodo sit amet. In pharetra condimentum hendrerit. Donec dictum in risus vitae tempor."
		},
		{
			title: "Prueba de título",
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mi sit amet malesuada mollis. Sed in ultrices urna, non tincidunt nibh. Aenean mi dui, ultricies non cursus eu, faucibus sed nisi. Proin sed condimentum ligula. Sed sagittis volutpat tempor. Praesent nec euismod risus. Etiam sed urna non mauris pellentesque maximus non et sapien. Donec pretium hendrerit sagittis. Mauris in lacus et orci pulvinar elementum. Vivamus massa dolor, semper ut consequat sed, facilisis at quam. Pellentesque malesuada est vel diam volutpat scelerisque. Curabitur dapibus rhoncus commodo. Nulla euismod lorem odio, eu venenatis ligula commodo sit amet. In pharetra condimentum hendrerit. Donec dictum in risus vitae tempor."
		},
		{
			title: "Prueba de título",
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mi sit amet malesuada mollis. Sed in ultrices urna, non tincidunt nibh. Aenean mi dui, ultricies non cursus eu, faucibus sed nisi. Proin sed condimentum ligula. Sed sagittis volutpat tempor. Praesent nec euismod risus. Etiam sed urna non mauris pellentesque maximus non et sapien. Donec pretium hendrerit sagittis. Mauris in lacus et orci pulvinar elementum. Vivamus massa dolor, semper ut consequat sed, facilisis at quam. Pellentesque malesuada est vel diam volutpat scelerisque. Curabitur dapibus rhoncus commodo. Nulla euismod lorem odio, eu venenatis ligula commodo sit amet. In pharetra condimentum hendrerit. Donec dictum in risus vitae tempor."
		},
		{
			title: "Prueba de título",
			date: moment().format("MMMM Do YYYY"),
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mi sit amet malesuada mollis. Sed in ultrices urna, non tincidunt nibh. Aenean mi dui, ultricies non cursus eu, faucibus sed nisi. Proin sed condimentum ligula. Sed sagittis volutpat tempor. Praesent nec euismod risus. Etiam sed urna non mauris pellentesque maximus non et sapien. Donec pretium hendrerit sagittis. Mauris in lacus et orci pulvinar elementum. Vivamus massa dolor, semper ut consequat sed, facilisis at quam. Pellentesque malesuada est vel diam volutpat scelerisque. Curabitur dapibus rhoncus commodo. Nulla euismod lorem odio, eu venenatis ligula commodo sit amet. In pharetra condimentum hendrerit. Donec dictum in risus vitae tempor."
		}
	];

	posts.forEach((item, index) => {
		var post = `
			<article class="post">
				<h2>${item.title} ${index+1}</h2> 
				<span class="date">${item.date}</span> 
				<p>
					${item.content}
				</p>
				<a href="" class="button-more">Leer más</a>
			</article>
		`;

		$("#posts").append(post);
	})

	//Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	})

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	})

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	})

	//Scroll arriba de la web
	$(".subir").click(function(e) {
		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0, //Ponemos el scroll en el píxel 0 desde que empieza la web, y tarda 500ms en hacerlo
		}, 500)
		return false;
	});

	//Login falso
	$("#login form").submit(function() {
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined") {
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function() {
			localStorage.clear();
			location.reload(); //Actualizar la ventana
		});
	}

});









