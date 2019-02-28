"use strict"

// Cargo el módulo mongoose para trabajar con él
var mongoose = require("mongoose");

var app = require("./app");
var port = "3700"; // localhost:3700

// Conexión a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portafolio")
	.then(() => {

		console.log("Conexión a la base de datos establecida correctamente");

		// Creación del servidor
		app.listen(port, () => {
			console.log("Servidor corriendo correctamente en la url localhost: " + port);
		}); // Método listen() de express

	})
	.catch(error => {
		console.log(error);
	})