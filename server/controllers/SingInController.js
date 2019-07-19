const modelSingUp = require('../models/SingUp');

module.exports = {
    async singIn(req, res) {
        const { senha, email } = req.body;

        const user = await modelSingUp.findOne({
            email: email
        });

        if (user && user.senha === senha) {
            return res.status(200).json(user);
        } else if (user && user.senha !== senha) {
            return res.status(401).json({ mensagem: "Usuário e/ou senha inválidos!" });
        }

        return res.status(404).json({ mensagem: "Usuário e/ou senha inválidos!" });
    }
}