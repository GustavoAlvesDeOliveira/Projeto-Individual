var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/graficotituloquiz", function (req, res) {
    graficosController.graficotituloquiz(req, res);
});

router.get("/barradeprogresso", function (req,res) {
    graficosController.barradeprogresso(req, res);
})

router.get("/graficoidade", function (req,res) {
    graficosController.graficoidade(req, res);
})

router.get("/graficoacertosquiz", function (req,res) {
    graficosController.graficoacertosquiz(req, res);
})
module.exports = router;