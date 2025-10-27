import React from 'react'
import './CardLivro.scss'

const CardLivro = ({ capa_url, titulo, autor }) => {
    return (
        <div className='container_card_livro'>
            <img src={capa_url} alt={capa_url} />
            <h2>{titulo}</h2>
            <h3>{autor}</h3>

        </div>
    )
}

export default CardLivro