"use strict"

//Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero); //40

if (true) {
	var numero = 50; //50
	console.log(numero);
}

console.log(numero); //50

//Prueba con let
var texto = "Curso JS";
console.log(texto); //Curso JS

if (true) {
	let texto = "Curso Laravel 5"; //Con let solo actuamos a nivel local
	console.log(texto); //Curso Laravel 5
}

console.log(texto); //Curso JS