var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(emblema, titulo, fkusuario) {
    var instrucao = `
        INSERT INTO resultado (emblema,titulo,fkusuario) VALUES ('${emblema}' , '${titulo}' , '${fkusuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};