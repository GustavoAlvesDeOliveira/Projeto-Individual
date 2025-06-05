
-- Organizando o ambiente

drop database if exists culinariaglacial;
create database culinariaglacial;
use culinariaglacial;

-- Criando as tabelas

create table usuario (
  id int not null auto_increment,
  Nome varchar(30),
  Sobrenome varchar(60) ,
  Idade date,
  Genero varchar(20),
  Email varchar(100),
  Senha varchar(30),
  primary key (id)
);

create table quiz(
	idquiz int not null,
    descricao varchar(100),
    primary key (idquiz)
);

create table  resultado_quiz(
	fkusuario int not null,
    fkquiz int not null,
	emblema varchar(100),
	titulo varchar(40),
    acertos char(2),
    erros char(2),
    primary key (fkusuario,fkquiz),
    foreign key (fkusuario) references usuario(id),
    foreign key (fkquiz) references quiz(idquiz)
);

-- inserts 'chumbados'
insert into quiz (idquiz,descricao)
values ('1','Quiz de conhecimentos gerais do meu site.');

-- Teste em selects:

select * from usuario;
select * from quiz;
select * from resultado_quiz;

-- Juntando tudo.

Select * from usuario
left join resultado_quiz 
on fkusuario = id 
left join quiz 
on fkquiz = idquiz;


-- Selects do meu projeto individual
-- autenticar() usado pra login no web data viz com um acrescento de um left join pra colocar mais coisas no sessionstorage
select id, nome, sobrenome, email, genero, titulo, emblema
from usuario
left join resultado_quiz 
on fkusuario = id;

-- graficotituloquiz() para contar quantos titulos tem de cada.
select
(select count(titulo) from resultado_quiz where titulo like '🥣Glaceon perdidinha🥣') as TituloQuiz1,
(select count(titulo) from resultado_quiz where titulo like '🧊Iniciante do Gelo🧊') as TituloQuiz2,
(select count(titulo) from resultado_quiz where titulo like '🌨️Aprendiz da Neve🌨️') as TituloQuiz3,
(select count(titulo) from resultado_quiz where titulo like '❄️Chef Gelado❄️') as TituloQuiz4,
(select count(titulo) from resultado_quiz where titulo like '💠Mestre Cuca Glacial💠') as TituloQuiz5,
(select count(titulo) from resultado_quiz where titulo like '🌟👑🌬️ Lenda da Cozinha Gélida🌬️👑🌟') as TituloQuiz6;

-- barradeprogresso() usei para mostrar uma barra de progresso do número de cadastro, objetivo de 59 cadastros.
select count(id) as total from usuario;
