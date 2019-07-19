const modelSingUp = require('../models/SingUp');
const moment = require('moment');

function getDiff(ultimoLogin) {
    const start = moment(new Date());
    const end = moment(ultimoLogin);

    return moment.duration(start.diff(end)).minutes();
}

module.exports = {

    async autenticar(req, res) {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ mensagem: "Não autorizado" });
        }

        const user = await modelSingUp.findOne({
            token: token
        });

        if (!user) {
            return res.status(401).json({ mensagem: "Não autorizado" });
        }

        const login = getDiff(user.ultimoLogin);

        if (login > 30) {
            return res.status(401).json({ mensagem: "Não autorizado" });
        }

        return res.status(200).json(user);
    }

}