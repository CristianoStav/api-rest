const modelSingUp = require('../models/SingUp');

module.exports = {
    async singUp(req, res) {
        const { nome, email, senha, telefones } = req.body;

        const user = await modelSingUp.find({
            email: email
        })

        if (user.length > 0) {
            return res.status(400).json({ mensagem: "Já existe um usuário com este e-mail!" });
        }

        const cadastro = await modelSingUp.create({
            nome, email, senha, telefones
        });

        return res.status(201).json(cadastro)
    },

    async getUsers(req, res) {
        const users = await modelSingUp.find();

        return res.status(200).json(users);
    }
}