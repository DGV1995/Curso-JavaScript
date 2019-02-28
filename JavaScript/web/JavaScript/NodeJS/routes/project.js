// Fichero de configuración de las rutas del controlador project

"use strict"

var express = require("express");
var ProjectController = require("../controllers/project");

var router = express.Router();

router.get("/home", ProjectController.home);
router.post("/test", ProjectController.test);
router.post("/save-project", ProjectController.saveProject);

module.exports = router;