"use strict"

// BOM - Browser Object Model

function getBom() {
	console.log(window.innerHeight); // Altura de la ventana del navegador
	console.log(window.innerWidth); // Anchura de la ventana del navegador
	console.log(screen.height);
	console.log(screen.width);
}

function redirect(url) {
	window.location.href = url;
}

function abrirVentana(url) {
	window.open(url, "", "width=400, heigh=300");
}

getBom();