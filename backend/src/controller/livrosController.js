import * as repo from '../repository/livrosRepository.js'
import { getAuthentication } from '../utils/jwt.js'
import { Router } from 'express'
const auth = getAuthentication();
const endpoints = Router();

endpoints.get('/livros', auth, async (req, res) => {
    let registros = await repo.listarLivros();

    res.send(registros)
})


endpoints.post('/livros/registrar', auth, async (req, res) => {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const capa_url = req.body.capa_url;


    const info = await repo.cadastrarLivro(titulo, autor, capa_url);
    res.send({
        "NovoLivro": info
    })
})

endpoints.post('/livros/autor/:autor', auth, async (req, res) => {
    const autor = req.params.autor;
    const info = await repo.filtrarLivrosAutor(autor);

    res.send(info);
})
endpoints.post('/livros/titulo/:titulo', auth, async (req, res) => {
    const titulo = req.params.titulo;
    const info = await repo.filtrarLivrosTitulo(titulo);

    res.send(info);
})


export default endpoints
