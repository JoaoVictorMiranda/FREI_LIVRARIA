import React from 'react'
import Logo from '../../assets/logo.svg'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='container_footer'>
            <div className='container_conteudo_footer'>
                <div>
                    <img src={Logo} alt="Logo Livraria Frei" />
                </div>
                <div>
                    <h2>Contato</h2>
                    <p>
                        (11) 91111-1111 <br /> <br />
                        livraria@frei.com
                    </p>
                </div>
                <div>
                    <h2>Desenvolvido por</h2>
                    <br />
                    <p>
                        João Victor Miranda Reis <br /><br />
                        Lucar Gil Reche
                    </p>
                </div>
                <div>
                    <h2>Turma</h2>
                    <p>informatica B</p>
                </div>
            </div>
            <div className='direitos'><p>2025 @ Instituto Nossa Senhora de Fátima</p></div>

        </div>
    )
}

export default Footer