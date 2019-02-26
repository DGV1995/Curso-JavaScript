$(document).ready(function() {

	// LOAD
	//$("#datos").load("https://reqres.in");

	// GET
	$.get("https://reqres.in/api/users", {page: 3}, function(response) { // El segundo parámetro de la función son los parámetros que queremos de la petición (página, número de usuario, etx)
		console.log(response); // Respuesta del get()
		response.data.forEach((element, index) => {
			$("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>");
		})
	})

	// POST
	
	var usuario = {
		first_name: "Diego",
		last_name: "Garcia-Viana",
		email: "diego.garcia.viana@tager.com"
	}

	/*$.post("https://reqres.in/api/users", usuario, response => {
		console.log(response);
	})*/

	//Otra forma sería:
	$("#formulario").submit(function(event) {

		event.preventDefault(); // Para que no haga la acción por defecto, que es redirigirme a la url del post

		var usuario = {
			first_name: $("input[name='nombre'").val(), // Coge la etiqueta 'input' cuyo 'name' sea 'nombre'
			last_name:$("input[name='apellidos'").val(),
			email: $("input[name='email'").val()
		};

		/*$.post($(this).attr("action"), usuario, response => {
			console.log(response);
		})
		.done(() => {
			alert("Usuario añadido correctamente");
		});*/

		// AJAX --> la mejor forma de hacerlo, ya que puedes configurar cualquier petición (tanto GET como POST)
		$.ajax({
			type: "POST",
			url: $(this).attr("action"), // Url a la hago la petición ajax
			data: usuario,  // Objeto que voy a enviar
			beforeSend: function() { // Acción a realizar antes de enviar el POST
				console.log("Enviando usuario...");
			},
			success: function(response) { // Acción a realizar una vez finalizado el POST correctamente
				console.log(response);
			}, 
			error: function() {
				console.log("Ha ocurrido un error");
			},
			timeout: 2000 // Tiempo que quiero que tarde como máximo la acción en realizarse (2 segundos en este caso)

		});
	
	});

});