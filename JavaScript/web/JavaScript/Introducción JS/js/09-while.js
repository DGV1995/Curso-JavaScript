"use strict"

//Bucle while

var i = 0;

while (i < 10) {
	console.log(i);
	if (i == 5)
		break;
	i++;
}

//Do while
var years = 20;

do {
	alert("Solo cuando sea diferente a 20");
	years++;
} while (years > 25);