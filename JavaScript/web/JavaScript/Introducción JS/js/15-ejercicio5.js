"use strict"

/*
Monstrar todos lo números divisores de un número introducido por el usuario
*/

var numero = parseFloat(prompt("Introduce un numero:", 0));

while (numero <= 0 || isNaN(numero)) {
	alert("Numero incorrecto, vuelve a introducirlo");
	numero = parseFloat(prompt("Introduce un numero:", 0));
}

document.write("<h1>Los numeros divisores de " + numero + " son los siguientes:</h1>");

var contador = 0;

for (var i = 0; i < numero; i++) {
	if (numero%i == 0) {
		document.write(i + "<br/>");
		contador++;
	}
}

if (contador == 1)
	document.write("El numero introducido es un numero primo, no tiene divisores");