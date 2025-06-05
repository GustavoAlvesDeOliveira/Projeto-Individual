var database = require("../database/config")

function listar() {
    var instrucao = `

            `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(fkusuario, fkquiz, emblema, titulo, acertos, erros ) {
    var instrucao = `
         insert into resultado_quiz (fkusuario, fkquiz, emblema, titulo, acertos, erros) values ('${fkusuario}' , '${fkquiz}' , '${emblema}' , '${titulo}' , '${acertos}' , '${erros}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};