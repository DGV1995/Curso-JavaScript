"use strict"

window.addEventListener("load", () => {

	try {

		var year = 2019;
		alert(year);

		console.log(decodeURIComponent("https://www.elmundo.es"));

	} catch (error) {
		console.log(error);
		alert("Ha ocurrido un error en el código");
	}

})