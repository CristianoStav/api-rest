const mocha = require('mocha');
const expect = require('chai').expect;
const http = require('http');
const request = require('request');
const singUpController = require('../server/controllers/SingUpController');

const API_URL = process.env.URL_PADRAO;

// function expectedResponse(response, obj) {
//     expect(response.telefones).to.equal(obj.telefones);
//     expect(response.email).to.equal(obj.email);
//     expect(response.nome).to.equal(obj.nome);
//     expect(body.senha).to.equal(obj.senha);
// }

describe("Com relação a busca de usuário", function () {
    describe("#buscar usuario", function () {
        it("Deve retornar erro ao buscar usuario sem um token", function () {
            const autorizacao = "Não autorizado";

            request.get(`${API_URL}/buscar`, function (err, resp, body) {
                expect(JSON.parse(body).mensagem).equal(autorizacao);
            });
        })
    })
});

describe("Com relação ao cadastro de usuário", function () {
    describe("#cadastrar", function () {
        it("deve cadastrar o usuario corretamente", function (done) {
            const user = {
                nome: "Cristiano",
                email: "cris@3.com",
                senha: "aaa",
                telefones: [{ ddd: 11, numero: 555 }, { ddd: 11, numero: 555 }],
            };

            request.post({ url: `${API_URL}/singup`, form: user }, function (err, resp, body) {
                if (body.email) {
                    expect(body.telefones).to.equal(user.telefones);
                    expect(body.email).to.equal(user.email);
                    expect(body.nome).to.equal(user.nome);
                    expect(body.senha).to.equal(user.senha);
                } else {
                    done(err);
                }
            });
        })
    })
})