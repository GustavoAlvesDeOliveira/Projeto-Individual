
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
	titulo varchar(30),
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
join resultado_quiz 
on fkusuario = id 
join quiz 
on fkquiz = idquiz;

-- selects do meu projeto individual

