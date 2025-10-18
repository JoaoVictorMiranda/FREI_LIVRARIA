import React from 'react'
import Logo from '../../assets/logo.svg'
import './Header.scss'

const Header = () => {
    return (
        <div className='container_header'>
            <img src={Logo} alt="Logo Livraria Frei" />
            <h1>Livraria Frei</h1>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Entrar</li>
                </ul>
            </nav>

        </div>
    )
}

export default Header