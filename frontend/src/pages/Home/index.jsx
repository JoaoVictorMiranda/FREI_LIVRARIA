import React from 'react'
import Header from '../../components/Header.jsx/Header'
import Footer from '../../components/Footer/Footer'
import InputPesquisa from '../../components/Input/InputPesquisa'
import './index.scss'

const Home = () => {
    return (
        <div className='container_home'>
            <Header />
            <main className="container_conteudo">

                <InputPesquisa label={"Bucar por livro:"} type={"text"} placeholder={"Fareinheith"} />
            </main>
            <Footer />
        </div>
    )
}

export default Home