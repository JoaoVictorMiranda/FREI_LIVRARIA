import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    const userName = localStorage.getItem("usuario")
    return (
        <div className='container_header'>
            <Link to={'/'}><img src={Logo} alt="Logo Livraria Frei" /></Link>
            <h1>Livraria Frei</h1>
            <nav>
                <ul>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li> <Link to={'/login'} >Entrar</Link></li>
                </ul>
                <h2>{userName ? userName : "Login"}</h2>
            </nav>

        </div>
    )
}

export default Header