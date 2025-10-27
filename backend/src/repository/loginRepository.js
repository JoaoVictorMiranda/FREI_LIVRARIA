import { connection } from "./connection.js";
import crypto from "crypto-js";


export async function cadastrarUsuario(pessoa) {
        const comando = `
                INSERT INTO usuarios (usuario, senha) 
		values
                (?, ?);
    `;

        let hash = crypto.SHA256(pessoa.senha).toString();

        let resposta = await connection.query(comando, [
                pessoa.usuario,
                hash
        ])
        let info = resposta[0];

        return info.insertId;

}


export async function login(usuario, senha) {
        const comando = `
        select id, usuario
        from usuarios 
        where 
            usuario = ?
            and senha = ?
    `;

        let hash = crypto.SHA256(senha).toString();

        let registros = await connection.query(comando, [
                usuario,
                hash
        ])
        return registros[0][0];
}
