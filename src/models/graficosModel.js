var database = require("../database/config")

function graficotituloquiz() {
    var instrucao = `
        select
        (select count(titulo) from resultado_quiz where titulo like 'Glaceon perdidinha') as TituloQuiz1,
        (select count(titulo) from resultado_quiz where titulo like 'Iniciante do Gelo') as TituloQuiz2,
        (select count(titulo) from resultado_quiz where titulo like 'Aprendiz da Neve') as TituloQuiz3,
        (select count(titulo) from resultado_quiz where titulo like 'Chef Gelado') as TituloQuiz4,
        (select count(titulo) from resultado_quiz where titulo like 'Mestre Cuca Glacial') as TituloQuiz5,
        (select count(titulo) from resultado_quiz where titulo like 'Lenda da Cozinha Gélida') as TituloQuiz6;
            `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function barradeprogresso() {
    var instrucao = `select count(id) as total from usuario;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoidade() {
    var instrucao = `
    select
(select count(id) from usuario where timestampdiff(year,Idade,curdate()) < 18) as 'Menores_de_idade',
(select count(id) from usuario where timestampdiff(year,Idade,curdate()) between 18 and 25) as 'Jovens_adultos',
(select count(id) from usuario where timestampdiff(year,idade,curdate()) between 25 and 60) as 'Adultos',
(select count(id) from usuario where timestampdiff(year,idade,curdate()) > 60) as 'Idosos';`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoacertosquiz() {
    var instrucao = `
    select sum(acertos) as 'acertos', sum(erros) as 'erros' from resultado_quiz;
`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficotituloquiz,
    barradeprogresso,
    graficoidade,
    graficoacertosquiz
};
