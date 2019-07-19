const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SingUpSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    telefones: {
        type: Array,
        required: true
    },
    ultimoLogin: {
        type: Date,
        required: true
    },
    token: {
        type: String,
        required: true
    },
}, {
        timestamps: true
    });

module.exports = mongoose.model("SingUp", SingUpSchema);