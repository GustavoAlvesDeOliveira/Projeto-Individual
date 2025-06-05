var emblemaModel = require("../models/emblemaModel");

function listar(req, res) {
    emblemaModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var fkusuario = req.body.fkusuarioServer;
    var fkquiz = req.body.fkquizServer;
    var emblema = req.body.emblemaServer;
    var titulo = req.body.tituloServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;

    emblemaModel.cadastrar(fkusuario, fkquiz, emblema, titulo, acertos, erros).then(function(resposta){
        res.status(200).send("Todas as variaveis criadas com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}