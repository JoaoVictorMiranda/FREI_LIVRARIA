CREATE DATABASE livraria;
use livraria;


CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(150) NOT NULL,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE livros (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    capa_url VARCHAR(255)
);


CREATE TABLE livros_emprestados (
    id_emprestado INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_livro INT UNSIGNED NOT NULL,
    id_usuario INT UNSIGNED NOT NULL,
    data_emprestimo DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_devolucao DATETIME NULL,
    FOREIGN KEY (id_livro) REFERENCES livros(id),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);