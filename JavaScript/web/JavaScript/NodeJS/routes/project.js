// Fichero de configuración de las rutas del controlador project

"use strict"

var express = require("express");
var ProjectController = require("../controllers/project"); // Creo un objeto del modelo

var router = express.Router();

// Configuro el middleware para poder subir una imagen con el MultiParty
// Un middleware es algo que se ejecuta antes de que se ejecute el método del controlador
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart({uploadDir: "./uploads"});

router.get("/home", ProjectController.home);
router.post("/test", ProjectController.test);
router.post("/save-project", ProjectController.saveProject);
router.get("/get-project/:id?", ProjectController.getProject);
// La '?' indica que 'id' es un parámentro OPCIONAL. 
// Si el parámetro es obligatiorio, no se pone nada al lado
router.get("/get-projects", ProjectController.getProjects);
router.put("/update-project/:id", ProjectController.updateProject); // En este caso, el id va a ser obligatorio para saber qué documento actualizar
router.delete("/delete-project/:id", ProjectController.deleteProject);
router.post("/upload-image/:id", multipartMiddleware, ProjectController.uploadImage);

module.exports = router;