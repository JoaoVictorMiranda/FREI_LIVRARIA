import React from 'react'
import './CardLivro.scss'
import { useNavigate } from "react-router";

const CardLivro = ({ livro }) => {
    const navigate = useNavigate();


    return (
        <div className='container_card_livro' onClick={() => navigate(`/livro/${livro.id}`)} >
            <img src={livro.capa_url} alt={livro.capa_url} />
            <h2>{livro.titulo}</h2>
            <h3>{livro.autor}</h3>
        </div>
    )
}

export default CardLivro