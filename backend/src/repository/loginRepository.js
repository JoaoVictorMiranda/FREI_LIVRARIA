import { connection } from "./connection.js";




export async function login(usuario, senha){
        const comando = `
        SELECT * FROM usuarios 
        WHERE 
        usuario = ?  
        AND
        senha = ?;
        `;
        let [info] = await connection.query(comando, [
                usuario,
                senha
        ])
        return info
}