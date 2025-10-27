import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../api.js'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './index.scss'

const Livro = () => {
    const { id } = useParams();
    const [livro, setLivro] = useState();

    useEffect(() => {
        const fetchLivro = async () => {
            try {
                const response = await api.get(`/livros/${id}`); // usar GET para buscar
                setLivro(response.data); // atualiza o estado depois
            } catch (error) {
                console.error('Erro ao buscar livro:', error);
            }
        };
        fetchLivro();
    }, [id]);
    console.log(livro)
    return (
        <div >
            <Header />
            <div className='container_detalhes_livro'>

                <div className="livro">
                    {livro ? (
                        <>
                            <div className="capa"><img src={livro.capa_url} alt={livro.titulo} /></div>
                            <h2>{livro.titulo}</h2>
                            <h3>{livro.autor}</h3>
                        </>
                    ) : (
                        <p>Carregando livro...</p>
                    )}
                </div>
                <div className="botoes">
                    <button>Excluir</button>
                    <button>Editar</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Livro