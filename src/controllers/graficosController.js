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

module.exports = {
    graficotituloquiz,
    barradeprogresso
}