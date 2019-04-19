const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FireController = require('./controllers/FileControllers');



routes.post("/boxes", BoxController.store);
routes.get('/boxes', BoxController.showAllBox);
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FireController.store);

routes.get('/boxes/:id', BoxController.show)
module.exports = routes;