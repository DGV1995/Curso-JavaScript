"use strict"

// Arrays

var nombres = ["Diego", "Pepe", "Pedro"];

var lenguajes = new Array("PHP","JS","Java","Python");

/*
console.log(lenguajes[0]);
console.log(nombres);
console.log(lenguajes.length); // Tamaño del array --> no usar size() como en Java

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

alert("El elemento es: " + nombres[elemento]);


document.write("<h1>Lenguajes de programacion de 2019</h1>");
document.write("<ul>");

/*for (var i = 0; i < lenguajes.length; i++) {
	document.write("<li>" + lenguajes[i] + "</li>");
}

//Bucle for-each
for (var lenguaje of lenguajes) {
	document.write("<li>" + lenguaje + "</li>");
}

document.write("</ul>");

document.write("<hr/>");

document.write("<ul>");

lenguajes.forEach((elemento, indice, array) => {
	console.log(array); // Es el array sobre el que se hace el bucle for-each
	document.write("<li>" + indice + " - " + elemento + "</li>");
})

document.write("</ul>");*/

for (let lenguaje in lenguajes) { //Recorre los índices del array --> Funciona igual poniendo 'var' o 'let'
	document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

//Búsquedas
/*var busqueda = lenguajes.find(function(lenguaje) {
	return lenguaje == "PHP";
})*/

//Más simple
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); //El primer 'lenguaje' que aparece es el parámetro que pasamos a la función de callback
console.log(busqueda);

var indice = lenguajes.findIndex(lenguaje => lenguaje == "Java");
console.log(indice);

var precios = [10,20,50,80,12];
var busqueda = precios.some(precio => precio >= 50); //Buscamos si algún elemento cumple la condiciñon indicada
console.log(busqueda);
