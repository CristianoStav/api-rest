const api = require('./config/express'),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose');
require('dotenv').config();

api.use(require('./routes/routes'));

api.set('secret', 'super_secret');

mongoose.connect(process.env.CONNECTION_MONGO, {
    useNewUrlParser: true,
});

api.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}.`);
})

module.exports = api;