"use strict"

var Project = require("../models/project");

var controller = {

	home: (request, response) => {
		return response.status(200).send({
			message: "Soy la home"
		});
	},

	test: (request, response) => {
		return response.status(200).send({
			message: "Soy el método o acción test del controlador de project"
		});
	},

	// Guardar documento en la base de datos
	saveProject: (request, response) => {
		// Creo un objeto de Project (como si Project fuera una clase)
		var project = new Project();

		var params = request.body;

		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.langs = params.langs;
		project.year = params.year;
		project.image = params.image;

		// Guardamos el projecto en la colección
		project.save((error, projectStored) => {

			if (error) return response.status(500).send({message: "Error al guardar"});

			if (!projectStored) return response.status(404).send({message: "No se ha apodido guardar el proyecto"});

			return response.status(200).send({project: projectStored})

		})

		return response.status(200).send({
			message: "Método saveProject",
			project: project
		})
	} 
};

module.exports = controller;