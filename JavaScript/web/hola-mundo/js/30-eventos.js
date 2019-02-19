"use strict"

// EVENTOS DEL RATÓN

window.addEventListener("load", () => { // Utilizamos esto para poder poner el script en el head del DOM en vez de ponerlo al final del body

	var boton = document.querySelector("#boton");

	// Podemos llamar a esta función desde el objeto boton mediante el atributo 'onclick'. Para usarlo con doble click --> 'ondblclick'
	function cambiarColor() {

		var bg = boton.style.background;

		if (bg == "green") {
			boton.style.background = "red";

		}
		else
			boton.style.background = "green";

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

	}

	// Click
	boton.addEventListener("click", () => { 
		cambiarColor();
	}); 

	// Mouse over
	boton.addEventListener("mouseover", () => {
		boton.style.background = "yellow";
	});

	// Mouseout
	boton.addEventListener("mouseout", () => {
		boton.style.background = "#ccc"; // Gris claro
	});

	// Focus
	var input = document.querySelector("#campo_nombre");

	input.addEventListener("focus", () => { // Salta cuando haces click dentro del input
		console.log("[focus] Estas dentro del input");
	});

	// Blur
	input.addEventListener("blur", () => { // Salta cuando haces click fuera del input
		console.log("[blur] Estas fuera del input");
	});

	// Kewdown
	input.addEventListener("keydown", (event) => { // Salta cuando pulsas una tecla
		console.log("[keydown] Pulsando la tecla " + String.fromCharCode(event.keyCode)); // fromCharCode() devuelve la tecla que se pulsa
	});

	// Keypress
	input.addEventListener("keypress", (event) => { // Salta cuando has presionado una tecla
		console.log("[keypress] tecla presionada: " + String.fromCharCode(event.keyCode)); // fromCharCode() devuelve la tecla que se pulsa
	});


	//Keyup
	input.addEventListener("keyup", (event) => { // Salta cuando dejas de presionar una tecla
		console.log("[keyup] tecla soltada: " + String.fromCharCode(event.keyCode)); // fromCharCode() devuelve la tecla que se pulsa
	});

});
