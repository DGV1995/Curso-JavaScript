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
var elemento = "";

for (var i = 0; i < 6; i++) {
	elemento = parseInt(prompt("Elemento " + (i+1), ""));
	introducirElemento(elemento,array);
}

document.write("<h2>Los elementos introducidos son:</h2>");
mostrarArray(array);

document.write("<h2>Los elementos ordenados son:</h2>");
var array_ordenado = ordenarArray(array);
mostrarArray(array_ordenado);

document.write("<h2>Los elementos invertidos son:</h2>");
var array_invertido = invertirArray(array);
mostrarArray(array_invertido);

getLongitud(array);

var busqueda = parseInt(prompt("Introduce el numero que quieres buscar:", ""));
getIndice(busqueda, array);


//DEFINIMOS LAS FUNCIONES
function introducirElemento(elemento, array) {
	array.push(elemento);
	console.log(elemento);
}

function mostrarArray(array) {

	document.write("<ul>");

	for (let elemento of array) {
		document.write("<li>" + elemento + "</li>");
		console.log(elemento);
	}

	document.write("</ul>");

	document.write("<hr/>");

}

function ordenarArray(array) { // De menor a mayor
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if (array[i] > array[j]) {
				var aux = array[i];
				array[i] = array[j];
				array[j] = aux;
			}
		}
	}
	return array;
}

function invertirArray(array) { // De mayor a menor
	for (var i = 0; i < array.length; i++) {
		for (var j = i+1; j < array.length; j++) {
			if (array[i] < array[j]) {
				var aux = array[i];
				array[i] = array[j];
				array[j] = aux;
			}
		}
	}
	return array;
}

function getLongitud(array) {
	document.write("<p><h3>El array tiene " + array.length + " elementos</p>");
}

function getIndice(index, array) {

	var indice = array.findIndex(index => index == busqueda);

	if (indice == -1)
		alert("El numero indicado no se encuentra en el array introducido");
	else
		document.write("<p>El numero " + busqueda + " ocupa el indice " + indice + " dentro del array</p>");

}


