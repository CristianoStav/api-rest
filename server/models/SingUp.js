const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SingUpSchema = new Schema({
    nome: String,
    email: String,
    senha: String,
    telefones: Array
}, {
        timestamps: true
    });

module.exports = mongoose.model("SingUp", SingUpSchema);