"use strict"

// Fetch (ajax) y peticiones asíncronas a servicios/apis rest

window.addEventListener("load", () => {

	var div_usuarios = document.querySelector("#usuarios");
	var div_janet = document.querySelector("#janet");
	var div_profesor = document.querySelector("#profesor");
	var usuarios = [];

	getUsuarios() 
		.then(data => data.json()) 	// Cuando recibamos los datos, los convertimos a JSON --> 'data' es el parámetro de entrada de la función, y 'data.json()' el retorno
		.then(users => {   // Cuando ya tenemos el JSON, ejecutamos esta función de callback --> el parámetro de entrada 'data' es el retorno de la función anterior (data.sjon())
			listadoUsuarios(users);		
			return getInfo();
		})
		.then(data => {
			div_profesor.innerHTML = data;
			return getJanet();
		}) 
		.then(data => data.json())
		.then(user => {
			mostrarJanet(user.data);
			
		})
		.catch(error => { // Capturar error en caso de que se produzca
			alert("Error en las peticiones");
		});
		

	function getUsuarios() {
		return fetch("https://jsonplaceholder.typicode.com/users"); // URL que escupe un JSON (promesa)
	}

	function getJanet() {
		return fetch("https://reqres.in/api/users/2");
	}

	function getInfo() {

		var profesor = {
			nombre: "Diego",
			apellidos: "Garcia-Viana",
			edad: 23
		};

		return new Promise((resolve, reject) => {

			var profesor_string = "";

			setTimeout(() => {

				profesor_string = JSON.stringify(profesor);

				if (typeof(profesor_string) != "string" || profesor_string == "")
					return reject("error");
				return resolve(profesor_string);

			}, 3000);

		});

	}

	function listadoUsuarios(usuarios) {

		usuarios.map( (user, i) => {

			let nombre = document.createElement("h3");
			nombre.innerHTML = i + ". " + user.name;				
			div_usuarios.appendChild(nombre);
			document.querySelector(".loading").style.display = "none";

		});
		
	}

	function mostrarJanet(user) {

		console.log(user);

		let nombre = document.createElement("h4");
		let avatar = document.createElement("img");

		avatar.src = user.avatar;
		avatar.width = "100px";

		nombre.innerHTML = user.first_name + " " + user.last_name;	

		div_janet.appendChild(nombre);	
		div_janet.appendChild(avatar);

		document.querySelector("#janet .loading").style.display = "none";
		
	}

})