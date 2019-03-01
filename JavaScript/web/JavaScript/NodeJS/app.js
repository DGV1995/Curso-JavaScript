// CONFIGURACIÓN BÁSICO DE EXPRESS Y BODY-PARSER PARA CREAR MI SERVIDOR	

"use strict"

// Cargo el módulo de express, y tengo el objeto de express listo para trabajar con él
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Cargar archivos de rutas
var project_routes = require("./routes/project");

// Configuración de middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); // Cualquier tipo de petición que me llegue, lo convierte a json

// CORS Y CABECERAS
// Configuramos un middleware para tener el menor número de problemas con el back-end --> Se va a ejecutar siempre antes de realizar cada petición
app.use(request, response, next) => {
	request.header("Access-Control-Allow-Origin", "*");
	request.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Conten-Type, Accept, Access-Control-Allow-Request-Method");
	resquest.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	request.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
}

// Cargar rutas
app.use("/api", project_routes);

// Exportar
module.exports = app;