"use strict"

// Parámetros REST y SPREAD

//REST
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);
	console.log("Resto de frutas: " + resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon");

//SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon");