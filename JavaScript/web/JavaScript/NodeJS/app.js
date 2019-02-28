// CONFIGURACIÓN BÁSICO DE EXPRESS Y BODY-PARSER PARA CREAR MI SERVIDOR	

"use strict"

// Cargo el módulo de express, y tengo el objeto de express listo para trabajar con él
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Cargar archivos de rutas


// Configuración de middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Cualquier tipo de petición que me llegue, lo convierte a json

// CORS


// Cargar rutas
app.get("/", (request, response) => {
	response.status(200).send("<h1>Página de inicio</h1>");
});

app.get("/test", (request, response) => {
	response.status(200).send({
		message: "Hola mundo desde mi API de NodeJS"
	});
});

app.post("/test", (request, response) => {
	console.log(request.body.nombre + " " + request.body.apellidos);

	response.status(200).send(
		console.log("POST realizado correctamente"),
	);
});

// Exportar
module.exports = app;