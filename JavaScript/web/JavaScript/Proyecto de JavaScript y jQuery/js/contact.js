$(document).ready(function() {

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

	//Validación
	if(window.location.href.indexOf("contact") > -1) {
		$("form input[name='date']").datepicker( {
			dateFormat:"dd-mm-yy"
		});

		$.validate({
    		lang: 'es',
    		errorMessagePosition: "top",
    		scrollToTopOnError: true
  		});
	}

})