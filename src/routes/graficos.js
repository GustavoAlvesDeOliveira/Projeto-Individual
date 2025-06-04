var express = require("express");
var router = express.Router();

router.get("/graficotituloquiz", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    graficosController.graficotituloquiz(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    graficosController.listar(req, res);
});

module.exports = router;