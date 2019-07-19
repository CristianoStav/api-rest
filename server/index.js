const api = require('./config/express'),
    port = 3000,
    mongoose = require('mongoose');

api.use(require('./routes/routes'));

api.set('secret', 'super_secret');

mongoose.connect('mongodb+srv://criszu:cris123@teste-pv7yh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

api.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}.`);
})

module.exports = api;