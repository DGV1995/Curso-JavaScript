"use strict"

// Funciones anónimas (sin nombre)

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {

	var sumar = numero1 + numero2;
	//Funciones de callback
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

/*sumame(5, 7, function(dato) {
	console.log("La suma es: " + dato);
}, 
function(dato) {
	console.log("La suma por dos es: " + dato*2);
});*/

//FUNCIONES FLECHA

sumame(5, 7, dato => {
	console.log("La suma es: " + dato);
}, 
dato => {
	console.log("La suma por dos es: " + dato*2);
});