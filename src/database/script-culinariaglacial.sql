Drop database if exists culinariaglacial;

create database culinariaglacial;

use culinariaglacial;


-- Tabela cadastro


CREATE TABLE usuario (
  id INT AUTO_INCREMENT,
  Nome VARCHAR(30) NOT NULL,
  sobrenome VARCHAR(60) NULL,
  Idade DATE NULL,
  genero VARCHAR(20) NULL,
  Email VARCHAR(100) NULL,
  Senha VARCHAR(30) NULL,
  PRIMARY KEY (id)
);


-- Tabela das paginas e sistema de favoritos


CREATE TABLE Paginas_Receitas (
  id INT AUTO_INCREMENT NOT NULL,
  Nome VARCHAR(45) NULL,
  PRIMARY KEY (id)
);


CREATE TABLE Comentarios (
	id INT AUTO_INCREMENT NOT NULL,
	FKUsuario INT NOT NULL,
	FKPaginas_Receitas INT NOT NULL,
	Conteudo VARCHAR(150) NULL,
	PRIMARY KEY (id, FKUsuario, FKPaginas_Receitas),
	CONSTRAINT fk_Comentarios_Usuario
	FOREIGN KEY (FKUsuario)
	REFERENCES usuario(id),
	CONSTRAINT fk_Comentarios_Paginas_Receitas
	FOREIGN KEY (FKPaginas_Receitas)
	REFERENCES Paginas_Receitas(id)
);


CREATE TABLE Receitas_Favoritas (
  FKUsuario INT NOT NULL,
  FKPaginas_Receitas INT NOT NULL,
  PRIMARY KEY (FKUsuario, FKPaginas_Receitas),
  CONSTRAINT fk_Receitas_Favoritas_Usuario
    FOREIGN KEY (FKUsuario)
    REFERENCES usuario(id),
  CONSTRAINT fk_Receitas_Favoritas_Paginas_Receitas
    FOREIGN KEY (FKPaginas_Receitas)
    REFERENCES Paginas_Receitas(id)
);


-- Tabelas do quiz


CREATE TABLE Respostas (
  idRespostas INT AUTO_INCREMENT NOT NULL,
  Conteudo VARCHAR(50) NULL,
  PRIMARY KEY (idRespostas)
  );


CREATE TABLE Perguntas (
  idPerguntas INT AUTO_INCREMENT NOT NULL,
  Conteudo VARCHAR(150) NULL,
  PRIMARY KEY (idPerguntas)
);


CREATE TABLE Perguntas_has_Respostas (
  FKPerguntas INT NOT NULL,
  FKRespostas INT NOT NULL,
  FKUsuario INT NOT NULL,
  PRIMARY KEY (FKPerguntas, FKRespostas, FKUsuario),
  CONSTRAINT fk_Perguntas_has_Respostas_Perguntas1
    FOREIGN KEY (FKPerguntas)
    REFERENCES Perguntas (idPerguntas),
  CONSTRAINT fk_Perguntas_has_Respostas_Respostas1
    FOREIGN KEY (FKRespostas)
    REFERENCES Respostas(idRespostas),
  CONSTRAINT fk_Perguntas_has_Respostas_Usuario1
    FOREIGN KEY (FKUsuario)
    REFERENCES usuario(id)
);

select * from culinariaglacial.usuario;