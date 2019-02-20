"use strict"

window.addEventListener("load", () => {

	console.log("DOM cargado");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	// Capturamos el evento 'submit' del botón 'Enviar'
	formulario.addEventListener("submit", () => {

		console.log("Evento submit capturado")

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		// Con nombre.trim() quitamos los espacios por delante y por detrás (si los hubiese)
		if (nombre.trim() == null || nombre.trim().length == 0) {
			alert("El nombre no es válido");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
			document.querySelector("#error_nombre").style.color = "red";
			return false;
		}
		else
			document.querySelector("#error_nombre").style.display = "none"; //Lo oculto

		if (apellidos.trim() == null || apellidos.trim().length == 0) {
			alert("Los apellidos no son válidos");
			return false;
		}

		if (edad == null || edad <= 0 || isNaN(edad)) { //isNaN == is not a number
			alert("La edad no es válida");
			return false;
		}

		box_dashed.style.display = "block";

		var datos_usuario = [nombre, apellidos, edad];

		var p_nombre = document.querySelector("#p_nombre span"); //Selecciono la etiqueta 'span' que hay dentro del elemento con id 'p_nombre'
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;

		/*
		for (let dato of datos_usuario) {
			var parrafo = document.createElement("p");
			parrafo.append(dato);
			box_dashed.append(parrafo);
		}
		*/

	})

})