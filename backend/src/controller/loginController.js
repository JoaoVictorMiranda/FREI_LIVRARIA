import * as repo from '../repository/loginRepository.js';
import { Router } from 'express'
import { generateToken } from '../utils/jwt.js'

const endpoints = Router();




endpoints.post('/register', async (req, res) => {
        try {
                let pessoa = req.body;
                let id = await repo.cadastrarUsuario(pessoa);

                res.send({
                        novoId: id
                })
        }
        catch (err) {
                res.status(400).send({
                        erro: err.message
                })
        }

})


endpoints.post('/login', async (req, res) => {
        try {
                let nome = req.body.usuario;
                let senha = req.body.senha;
                let usuario = await repo.login(nome, senha);

                if (usuario == null) {
                        res.send({ erro: "Usuário ou senha incorreto(s)" })
                } else {
                        let token = generateToken(usuario);
                        res.send({
                                "usuario": usuario,
                                "token": token
                        })
                }
        }
        catch (err) {
                res.status(400).send({
                        erro: err.message
                })
        }
});


export default endpoints