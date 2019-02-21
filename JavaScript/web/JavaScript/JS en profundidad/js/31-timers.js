"use strict"

window.addEventListener("load", () => {

	// TIMERS

	function intervalo() {

		// El primer parámetro de la función es una función de callback donde indicamos el código a realizar. El segundo parámetro es el intervalo de tiempo entre ejecuciones (en milisegundos)
		var tiempo = setInterval( () => { 

		var encabezado = document.querySelector("h1");
		
		if (encabezado.style.fontSize == "50px")
			encabezado.style.fontSize = "30px";
		else
			encabezado.style.fontSize = "50px";

		}, 1000);

		return tiempo;

	}

	// Para ejecutar el código una sola vez, se utiliza la función setTimeout

	var tiempo = intervalo(); // La función empieza a correr

	var start = document.querySelector("#start");


	start.addEventListener("click", () => { // Para iniciar el bucle
		alert("Has iniciado el intervalo en bucle");
		intervalo();
	});

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", () => {
		alert("Has parado el intervalo en bucle");
		clearInterval(tiempo); // Esta función elimina el bucle asociado a la variable 'tiempo'
	});

});