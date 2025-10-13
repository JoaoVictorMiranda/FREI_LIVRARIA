CREATE DATABASE livraria;
use livraria;


CREATE TABLE usuarios(
id int primary key auto_increment,
usuario varchar(150),
senha varchar(255)
);


CREATE TABLE livros(
id int primary 	key auto_increment,
titulo varchar(255),
autor varchar(255),
capa_url varchar(255)
);


INSERT INTO usuarios(usuario, senha)
VALUES
('Joao Victor', '123456');