import { connection } from "./connection.js";

export async function cadastrarUsuario(usuario, senha) {
        const comando = `
        INSERT INTO usuarios(usuario, senha)
        VALUES
        (?, MD5(?));
        `;
        let [info] = await connection.query(comando, [
                usuario,
                senha
        ]);
        return info

}


export async function login(usuario, senha) {
        const comando = `
        SELECT * FROM usuarios 
        WHERE 
        usuario = ?  
        AND
        senha = MD5(?);
        `;
        let [info] = await connection.query(comando, [
                usuario,
                senha
        ])
        return info
}