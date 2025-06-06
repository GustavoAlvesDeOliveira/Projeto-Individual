var graficosModel = require("../models/graficosModel");

function graficotituloquiz(req, res) {
    graficosModel.graficotituloquiz().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function barradeprogresso(req, res) {
    graficosModel.barradeprogresso().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}
function graficoidade(req, res) {
    graficosModel.graficoidade().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function graficogenero(req, res) {
    graficosModel.graficogenero().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function graficoacertosquiz(req, res) {
    graficosModel.graficoacertosquiz().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function rank (req, res) {
    graficosModel.rank().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    graficotituloquiz,
    barradeprogresso,
    graficogenero,
    graficoidade,
    graficoacertosquiz,
    rank,
}