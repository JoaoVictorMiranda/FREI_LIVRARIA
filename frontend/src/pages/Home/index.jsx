import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import InputPesquisa from '../../components/Input/InputPesquisa'
import './index.scss'
import CardLivro from '../../components/CardLivro/CardLivro'
import api from '../../api.js';

const Home = () => {
    const navigate = useNavigate();
    const [livros, setLivros] = useState([])

    async function listarLivros() {
        const response = await api.get('/livros')
        setLivros(response.data)
    }

    useEffect(() => {
        listarLivros()
        const nomeUsuario = localStorage.getItem("usuario")

        if (nomeUsuario == undefined || nomeUsuario == null) {
            navigate('/login')
        }
    }, [])


    return (
        <div className='container_home'>
            <Header />
            <main className="container_conteudo">
                <InputPesquisa label={"Bucar por livro:"} type={"text"} placeholder={"Fareinheith"} />
                <section className="livros">
                    {livros.map(livro =>
                        <CardLivro key={livro.id} capa_url={livro.capa_url} titulo={livro.titulo} autor={livro.autor} />
                    )}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home