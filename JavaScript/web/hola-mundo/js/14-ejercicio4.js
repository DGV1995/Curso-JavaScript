"use strict"

/*
Mostrar todo los número IMPARES entre dos números introducidos por el usuario
*/

var numero1 = parseFloat(prompt("Introduce un numero: ", 0));
var numero2 = parseFloat(prompt("Introduce otro numero: ", 0));

while (isNaN(numero1) || isNaN(numero2)) {
	alert("Numeros introducidos erroneos, vuelve a introducirlos");
	var numero1 = parseFloat(prompt("Introduce un numero: ", 0));
	var numero2 = parseFloat(prompt("Introduce otro numero: ", 0));
}

var max, min;

if (numero1 > numero2) {
	max = numero1;
	min = numero2;
}
else if (numero2 > numero1) {
	max = numero2;
	min = numero1;
}

document.write("<h1>De " + min + " a " + max + " estan los siguientes numeros impares:</h1>");

for (var i = min + 1; i < max; i++) {
	if (i%2 != 0)
		document.write(i + "<br/>");
}