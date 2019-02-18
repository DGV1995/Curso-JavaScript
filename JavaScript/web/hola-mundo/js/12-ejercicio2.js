"use strict"

/*
Monstrar la media y la suma de los números introducimos por el usuario hasta que este introduca un numero negativo o 0, o una entrada errónea
*/
var suma = 0;
var n_elementos = 0;

 do {

	var numero = parseFloat(prompt("Introduce un numero", 0));

	if (isNaN(numero))
		numero = 0;

	else if (numero > 0) {
		suma += numero;
		n_elementos++;
	}

	console.log("Suma actual: " + suma);
	console.log("Iteracion " + n_elementos);

} while (numero > 0 && !isNaN(numero))

alert("La suma de los numeros introducidos es: " + suma);
alert("La media de los numeros introducidos es: " + suma/n_elementos);