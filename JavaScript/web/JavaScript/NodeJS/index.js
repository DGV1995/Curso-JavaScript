"use strict"

var mongoose = require("mongoose");

// Conexión a la base de datos
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/portafolio")
	.then(() => {
		console.log("Conexión a la base de datos establecida con éxito");
	})
	.catch(error => {
		console.log(error);
	})