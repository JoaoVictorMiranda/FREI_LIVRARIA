import express from 'express';
import Navegar from './rotas.js';



const api = express();
api.use(express.json());
Navegar(api)



api.listen( 5022, () => console.log("subiu nesta porra 5022 a porta"))