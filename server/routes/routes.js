const express = require('express');
const routes = express.Router();
const singUpController = require('../controllers/SingUpController');
const singInController = require('../controllers/SingInController');
const auth = require('../controllers/auth');

routes.get('/', singUpController.getUsers);

routes.post("/singup", singUpController.singUp);

routes.post('/singin', singInController.singIn);

routes.use('/buscar', auth.autenticar);

module.exports = routes;