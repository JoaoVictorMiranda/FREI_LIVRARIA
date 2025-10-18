import express from 'express';
import Navegar from './rotas.js';



const api = express();
api.use(express.json());
Navegar(api)


const PORT = 5522
api.listen(PORT, () => console.log(`Funcinando na porta ${PORT}`))