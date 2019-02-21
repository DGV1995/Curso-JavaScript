"use strict"
// DOM - Document Object 

function cambiarColor(color) {
	caja.style.background = color; // Pone la letra en color blanco
}


// CONSEGUIR ELEMENTOS CON UN ID CONCRETO

//var caja = document.getElementById("micaja"); 
//var caja = document.getElementById("micaja").innerHTML; // Saca el texto 
var caja = document.querySelector("#micaja"); // El '#' se utiliza para seleccionar un id
											  // El '.' se utiliza para seleccionar una clase
											  // Si no se pone ningún símbolo, se selecciona una etiqueta

caja.innerHTML =  "Texto en la caja desde JS";
caja.style.background = "red"; // Pone el fondo del elemento de color rojo
caja.style.padding = "20px"; // Modifica el tamaño del elemento
caja.style.color = "white"; // Pone la letra en color blanco
caja.className = "hola"; // Le pongo una clase al elemento

// CONSEGUIR ELEMENTOS POR SU ETIQUETA

var todosLosDivs = document.getElementsByTagName("div");
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//var texto = todosLosDivs[2].textContent; // Igual que el innerHTML, pero este último permite modificar el texto
//console.log(texto);

for (let i in todosLosDivs) { // Índices
	if (typeof todosLosDivs[i].textContent == "string") { // Comprobamos si es un texto
		var parrafo = document.createElement("p"); //Creamos un párrafo
		var texto = document.createTextNode(todosLosDivs[i].textContent);

		parrafo.append(texto); // Añade después --> prepend() añade antes
		seccion.append(parrafo);
	}
}

seccion.append(hr);


// CONSEGUIR ELEMENTOS POR SU CLASE CSS

//var divsRojos = document.getElementsByClassName("rojo");
var divsRojos = document.querySelectorAll(".rojo"); // Si ponemos querySelector(), únicamente devuelve el primer elemento que encuentra
var divsAmarillos = document.getElementsByClassName("amarillo");

for (var i in divsRojos) {
	if (divsRojos[i].className == "rojo") 
		divsRojos[i].style.background = "red";
}

for (let i in divsAmarillos) {
	if (divsAmarillos[i].className == "amarillo")
		divsAmarillos[i].style.background = "yellow";
}

console.log(divsRojos);
