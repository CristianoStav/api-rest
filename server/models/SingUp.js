const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const SingUpSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
    },
    email: {
        type: String,

    },
    senha: {
        type: String,

    },
    telefones: {
        type: Array,

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
