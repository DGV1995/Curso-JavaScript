"use strict"

//JSON - JavaScript OBject Notation

window.addEventListener("load", () => {

	var pelicula = {
		titulo: "Batman",
		anio: 2017,
		pais: "Estados Unidos"
	};

	var peliculas = [
		{titulo:"La verdad duele", anio:2016, pais:"Francia"},
		pelicula
	];

	console.log(pelicula);
	console.log(pelicula.titulo);

	var caja_peliculas = document.querySelector("#peliculas");

	for (var p of peliculas) {
		var parrafo = document.createElement("p");
		parrafo.append(p.titulo + " - " + p.anio);
		caja_peliculas.append(parrafo);
	}

})
