"use strict"

/*
Programa que pida dos números y que nos diga cuál es el mayor, el menor y si son iguales
PLUS: Si los números no son un número o son menores o iguales a 0, nos lo vuelva a pedir
*/

var numero1 = parseFloat(prompt("Introduce un numero", 0));
var numero2 = parseFloat(prompt("Introduce otro numero", 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
	alert("Numeros incorrectos, vuelva a introducirlos");
	numero1 = parseFloat(prompt("Introduce un numero", 0));
	numero2 = parseFloat(prompt("Introduce otro numero", 0));
}

console.log(numero1, numero2);

if (numero1 > numero2)  {
	alert("El numero maypor es " + numero1);
	alert("El numero menor es " + numero2);
}
else if (numero2 > numero1) {
	alert("El numero mayor es " + numero2);
	alert("El numero menor es " + numero1);
}
else if (numero1 == numero2 && (numero1 != 0 && numero2 != 0)) {
	alert("Los dos numeros introducidos son iguales");
}

	


	


