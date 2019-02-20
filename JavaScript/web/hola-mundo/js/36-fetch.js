"use strict"

// Fetch (ajax) y peticiones asíncronas a servicios/apis rest

window.addEventListener("load", () => {

	var div_usuarios = document.querySelector("#usuarios");
	var usuarios = [];

	fetch("https://jsonplaceholder.typicode.com/users") // URL que escupe un JSON
		.then(data => data.json()) 	// Cuando recibamos los datos, los convertimos a JSON --> 'data' es el parámetro de entrada de la función, y 'data.json()' el retorno
		.then(data => {  
					// Cuando ya tenemos el JSON, ejecutamos esta función de callback --> el parámetro de entrada 'data' es el retorno de la función anterior (data.sjon())
			usuarios = data;
			console.log(usuarios);

			usuarios.map( (user, i) => {

				let nombre = document.createElement("h2");
				nombre.innerHTML = i + ". " + user.name;
				div_usuarios.appendChild(nombre);

				document.querySelector(".loading").style.display = "none";

			})

		}); 

})