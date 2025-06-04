var database = require("../database/config")

function graficotituloquiz() {
    var instrucao = `
        select
        (select count(titulo) from resultado where titulo like '🥣Glaceon perdidinha🥣') as TituloQuiz1,
        (select count(titulo) from resultado where titulo like '🧊Iniciante do Gelo🧊') as TituloQuiz2,
        (select count(titulo) from resultado where titulo like '🌨️Aprendiz da Neve🌨️') as TituloQuiz3,
        (select count(titulo) from resultado where titulo like '❄️Chef Gelado❄️') as TituloQuiz4,
        (select count(titulo) from resultado where titulo like '💠Mestre Cuca Glacial💠') as TituloQuiz5,
        (select count(titulo) from resultado where titulo like '🌟👑🌬️ Lenda da Cozinha Gélida🌬️👑🌟') as TituloQuiz6;
            `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function barradeprogresso() {
    var instrucao = `select count(id) as total from usuario;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    graficotituloquiz,
    barradeprogresso
};
