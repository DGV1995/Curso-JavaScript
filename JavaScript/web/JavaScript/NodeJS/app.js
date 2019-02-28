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

// CORS


// Cargar rutas
app.use("/api", project_routes);

// Exportar
module.exports = app;