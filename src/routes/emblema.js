var express = require("express");
var router = express.Router();

var emblemaController = require("../controllers/emblemaController");

router.post("/cadastrar", function (req, res) {
    emblemaController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    emblemaController.listar(req, res);
});


module.exports = router;