import React from 'react'
import Livro from '../../assets/livros.png'
import './CardLivro.scss'

const CardLivro = ({ titulo, autor }) => {
    return (
        <div className='container_card_livro'>
            <img src={Livro} alt="AAA" />
            <h2>{titulo}</h2>
            <h3>{autor}</h3>

        </div>
    )
}

export default CardLivro