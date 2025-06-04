var emblemaModel = require("../models/emblemaModel");

function listar(req, res) {
    emblemaModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var emblema = req.body.emblemaServer;
    var titulo = req.body.tituloServer
    var fkusuario = req.body.fkusuarioServer;


    if (emblema == undefined || titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    }

    emblemaModel.cadastrar(emblema,titulo,fkusuario).then(function(resposta){
        res.status(200).send("Emblema criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}