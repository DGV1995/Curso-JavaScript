"use strict"

// LOCALSTORAGE - Podemos utilizarlo como almacenamiento de información en el navegador web, para ser utilizada por distintas páginas web

window.addEventListener("load", () => {

	// Comprobar si el local storage está disponible en mi navegador
	if (typeof(Storage) != "undefined")
		console.log("Local Storage disponible");
	else
		console.log("Local Storage no disponible");

	// Guardar datos en el local storage
	localStorage.setItem("titulo", "Curso de JavaScript"); // Clave y valor

	// Recuperar elemento y meterlo en mi página web
	document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo"); // Clave

	// Guardar objetos
	var usuario = {
		nombre: "Diego",
		email: "diegogarciaviana.1995@gmail.com",
		empresa: "Taiger"
	};

	localStorage.setItem("usuario", JSON.stringify(usuario)); // convierto mi JSON en un JSON String

	// Recuperar objeto
	var userjs = JSON.parse(localStorage.getItem("usuario"));
	document.querySelector("#datos").append(userjs.nombre + " - " + userjs.email + " - " + userjs.empresa);

	// Limpiar el local storage
	localStorage.removeItem("usuario"); // Elimina un elemento
	localStorage.clear(); // Elimina todos los elementos

})