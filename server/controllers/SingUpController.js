const modelSingUp = require('../models/SingUp');
const uuid = require('uuid/v1');
const jwt = require('jsonwebtoken');

module.exports = {
    async singUp(req, res) {
        const { nome, email, senha, telefones } = req.body;
        const _id = uuid();
        const ultimoLogin = new Date();

        const user = await modelSingUp.find({
            email: email
        })

        if (user.length > 0) {
            return res.status(400).json({ mensagem: "Já existe um usuário com este e-mail!" });
        }

        const token = jwt.sign({ email: email }, "super_secret", { expiresIn: 1800 });
        const cadastro = await modelSingUp.create({
            _id, nome, email, senha, telefones, ultimoLogin, token
        });

        return res.status(201).json(cadastro);
    },

    async getUsers(req, res) {
        const users = await modelSingUp.find();

        return res.status(200).json(users);
    }
}