"use strict"

//Operadores
var numero1 = 7;
var numero2 = 12;

var suma = numero1 + numero2;
var resta = numero1 - numero2;

alert("El resultado de la operacion suma es: " + suma);
alert("El resultado de la operacion resta es: " + resta);

//Tipos de datos
var numero_entero = 10;
var numero_float = 7.54;
var cadena_texto = "Hola mundo";
var booleano = true;

var numero_falso = "32";

console.log(numero_entero + numero_falso);

/*
parteInt() --> convierte en un entero
parteFloat() --> convierte en un decimal
*/

console.log(numero_entero + parseInt(numero_falso));
console.log(typeof numero_falso);