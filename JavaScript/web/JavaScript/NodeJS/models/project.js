"use strict"

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Definir el esquema de los documentos de la colección que crearemos
var ProjectSchema = Schema({
	name: String,
	description: String,
	category: String,
	langs: [String],
	year: Number
})

// Cojo este esquema y lo utilizo como modelo
module.exports = mongoose.model("Project", ProjectSchema); // Nombre del objeto y esquema que utiliza
// En la base de datos se creará una colección con el nombre de 'projects'