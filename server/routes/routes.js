const express = require('express');
const routes = express.Router();
const singUpController = require('../controllers/SingUpController');


routes.get('/', singUpController.getUsers);

routes.post("/singup", singUpController.singUp);

module.exports = routes;