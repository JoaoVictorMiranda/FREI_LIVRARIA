import * as repo from '../repository/loginRepository.js';
import { Router } from 'express'
import { generateToken } from '../utils/jwt.js'

const endpoints = Router();

endpoints.post('/login', async (req, res) => {
        let usuario = req.body.usuario;
        let senha = req.body.senha;

        let [info] = await repo.login(usuario, senha);
        let token = generateToken(info);
        res.send({
                token: token
        })


});


export default endpoints