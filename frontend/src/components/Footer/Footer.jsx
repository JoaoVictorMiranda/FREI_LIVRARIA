import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './Footer.scss'

const Footer = () => {
    const navigate = useNavigate();
    function deslogar() {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        navigate('/login')
    }

    return (
        <div className='container_footer'>
            <div className='container_conteudo_footer'>
                <div>
                    <img src={Logo} alt="Logo Livraria Frei" />
                </div>
                <div>
                    <h2>Contato</h2>
                    <p>
                        (11) 94066-2828 <br /> <br />
                        livraria@frei.com
                    </p>
                </div>
                <div>
                    <h2>Desenvolvido por</h2>
                    <br />
                    <p>
                        <a href="https://www.github.com/JoaoVictorMiranda" target="_blank" rel="noopener noreferrer">João Victor Miranda Reis</a> <br /><br />
                        {/* Era pra ter teu portifolio aqui mas tu tirou do ar */}
                        <a href="https://github.com/Lucas-Silva-Manoel" target="_blank" rel="noopener noreferrer" >Lucas Silva Manoel</a>
                    </p>
                </div>
                <div>
                    <h2>Turma</h2>
                    <p>informatica B</p>
                    <button onClick={deslogar} >Deslogar</button>
                </div>
            </div>
            <div className='direitos'><p>2025 @ Instituto Nossa Senhora de Fátima</p></div>

        </div>
    )
}

export default Footer