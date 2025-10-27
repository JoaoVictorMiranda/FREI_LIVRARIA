import { connection } from "./connection.js";

export async function cadastrarLivro(titulo, autor, capa_url) {
    const comando = `
        INSERT INTO livros(titulo, autor, capa_url)
        VALUES
        (?,?,?);
    `
    let [info] = await connection.query(comando, [
        titulo,
        autor,
        capa_url
    ])
    return info.insertId;
}


export async function DetalhesLivro(idLivro) {
    const comando = `
        SELECT * FROM livros
        WHERE id = ?;
    `;
    let [info] = await connection.query(comando, [idLivro]);
    return info;
}


export async function listarLivros() {
    const comando = `
        SELECT * FROM livros;
    `
    let [info] = await connection.query(comando);
    return info;
}

export async function filtrarLivrosAutor(autor) {
    const comando = `
        SELECT * FROM livros
        WHERE autor LIKE ?;
    `;

    let [info] = await connection.query(comando, [`%${autor}%`]);
    return info;
}
export async function filtrarLivrosTitulo(titulo) {
    const comando = `
        SELECT * FROM livros
        WHERE titulo LIKE ?;
    `
    let [info] = await connection.query(comando, [`%${titulo}%`]);
    return info;
}
