"use strict"

window.addEventListener("load", () => {

	var formulario = document.querySelector("#formulario_añadir");

	formulario.addEventListener("submit", () => {
		console.log("Pelicula guardada");
		let titulo = document.querySelector("#pelicula").value;

		if (titulo.length > 0)
			localStorage.setItem(titulo, titulo);
		else
			alert("Pelicula no válida");
	})

	var formulario2 = document.querySelector("#formulario_borrar");

	formulario2.addEventListener("submit", () => {
		var pelicula = document.querySelector("#pelicula_borrar").value;
		if (pelicula.length > 0)
			localStorage.removeItem(pelicula);

	})

	let ul = document.querySelector("#lista_peliculas");

	for (let i in localStorage) {
		var li = document.createElement("li");
		if (typeof(localStorage[i]) == "string") {
			li.append(localStorage[i]);
			ul.append(li);
		}
	}

})