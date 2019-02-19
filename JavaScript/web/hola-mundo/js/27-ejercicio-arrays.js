"use strict"

/*

1. Pida 6 números por pantalla y los meta en un array
2. Mostrar todos los elementos del array en el cuerpo de la página y en la consola
3. Ordenar el array y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuántos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario y que nos diga si está en el array y su índice.

*/

var array = [];
var aux = [];

var elemento = "";

for (var i = 0; i < 6; i++) {
	elemento = parseInt(prompt("Elemento " + (i+1), ""));
	array.push(elemento);
	aux.push(elemento);
}

document.write("<h1>Los elementos introducidos son:</h1>");
document.write("<ul>");

for (let elemento of array) {
	document.write("<li>" + elemento + "</li>");
	console.log(elemento);
}

document.write("</ul>");

document.write("<hr/>");

document.write("<h2>Los elementos ordenados son:</h2>");
document.write("<ul>");

for (let elemento of array.sort()) {
	document.write("<li>" + elemento + "</li>");
	console.log(elemento);
}

document.write("</ul>");

document.write("<hr/>");

document.write("<h2>Los elementos invertidos son:</h2>");
document.write("<ul>");

for (let elemento of array.reverse()) {
	document.write("<li>" + elemento + "</li>");
	console.log(elemento);
}

document.write("</ul>");

document.write("<hr/>");

document.write("<p><h3>El array tiene " + array.length + " elementos</p>");

var busqueda = parseInt(prompt("Introduce el numero que quieres buscar:", ""));
var indice = aux.findIndex(indice => indice == busqueda);

document.write("<p>El numero " + busqueda + " ocupa el indice " + indice + " dentro del array</p>");