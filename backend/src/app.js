import express from 'express';
import Navegar from './rotas.js';
import cors from 'cors'


const api = express();
api.use(express.json());
api.use(cors())
Navegar(api)


const PORT = 5522
api.listen(PORT, () => console.log(`Funcinando na porta ${PORT}`))