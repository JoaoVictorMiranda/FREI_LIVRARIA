import React, { useState } from 'react'
import Header from '../../components/Header.jsx/Header'
import Footer from '../../components/Footer/Footer'
import InputPesquisa from '../../components/Input/InputPesquisa'
import './index.scss'
import CardLivro from '../../components/CardLivro/CardLivro'
import api from '../../api';

const Home = () => {
    const [livros, setLivros] = useState();
    {/*  TEMRMINAR DE CHAMAR A API PRA LISTAR LIVROS MAS FAZER AS OUTRAS PAGINAR PRIMEIRO */ }
    api.get('/livros', {

    })

    return (
        <div className='container_home'>
            <Header />
            <main className="container_conteudo">
                <InputPesquisa label={"Bucar por livro:"} type={"text"} placeholder={"Fareinheith"} />

                <CardLivro titulo={"Fahreinheit 451"} autor={"ray bradbury"} />
            </main>
            <Footer />
        </div>
    )
}

export default Home