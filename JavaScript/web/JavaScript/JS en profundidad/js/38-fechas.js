"try catch"

window.addEventListener("load", () => {

	var fecha = new Date();
	console.log(fecha);

	var year = fecha.getFullYear();
	var mes = fecha.getMonth() + 1; // Empieza en 0 (enero)
	var dia = fecha.getDay();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	
	var textoHora = `
		El año es: ${year}
		El mes es: ${mes}
		El dia es: ${dia}
		La hora es: ${hora}:${minutos}:${segundos}
	`;

	console.log(textoHora);
	console.log(Math.random()); // Muestra un número aleatorio entre 0 y 1
	console.log(Math.ceil(Math.random() * 100)) // Con ceil() redondeamos el número a un valor entero

})