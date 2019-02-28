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
		});
	},

	// Obtener un documento de la colección
	getProject: (request, response) => {

		var projectId = request.params.id;

		if (projectId == null)
			return response.status(404).send({message: "El documento no existe"});

		Project.findById(projectId, (error, project) => {

			if (error) return response.status(500).send({message: "Error al devolver los datos"});

			if (!project) return response.status(404).send({message: "El documento no existe"});

			return response.status(200).send(project)

		});

	},

	// Obtener todos los documentos de la colección
	getProjects: (request, response) => {

		//Project.find({langs:"Python"}).exec((error, projects) => { --> Se puede poner una condición (o varias) para la búsqueda

		// Project.find({}).sort("-year".exec((error, projects) => { --> Ordeno por año, de menor a mayor (de mayot a menor --> "+year")

		Project.find({}).exec((error, projects) => { // Sin condición saca todos los documentos


			if (error) return response.status(500).send({message: "Error al devolver los datos"});

			if (!projects) return response.status(404).send({message: "No hay documentos para mostrar"});

			return response.status(200).send({projects});

		});

	},

	// Actualizar un documento
	updateProject: (request, response) => {

		var projectId = request.params.id;
		var update = request.body;

		Project.findByIdAndUpdate(projectId, update, {new:true},(error, projectUpdated) => { // El tercer parámetro lo pasamos para que projectUpdated nos devuelva el documento actualizado en vez del antiguo

			if (error) return response.status(500).send({message: "Error al actualizar los datos"});

			if (!projectUpdated) return response.status(404).send({message: "No existe el documento para actualizar"});

			return response.status(200).send(projectUpdated);

		});

	},

	// Borrar un documento
	deleteProject: (request, response) => {

		var projectId = request.params.id;

		//Project.findByIdAndRemove(projectId, (error, projectDeleted) => { (por si el de abajo no funciona)

		Project.findByIdAndDelete(projectId, (error, projectDeleted) => {

			if (error) return response.status(500).send({message: "Error al eliminar los datos"});

			if (!projectDeleted) return response.status(404).send({message: "No existe el documento para eliminar"});

			return response.status(200).send(projectDeleted);

		})

	},

	// Subir imágenes al servidor
	uploadImage: (request, response) => {

		var projectId = request.params.id;
		var fileName = "Imagen no subida"; // Por defecto;

		if (request.files) {

			var filePath = request.files.image.path;
			var fileSplit = filePath.split("/");
			fileName = fileSplit[1];

			Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (error, projectUpdated) => {

				if (error) return response.status(500).send({message: "Error al subir la imagen"});

				if (!projectUpdated) return response.status(404).send({message: "No hay documento para actualizar"});

				return response.status(200).send(projectUpdated);

			})

		}
		else
			return response.status(200).send({message: fileName});

	}

};

module.exports = controller;





