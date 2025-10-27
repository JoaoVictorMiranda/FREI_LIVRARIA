import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import api from '../../api.js'
import './index.scss'

const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("usuario")

        if (nomeUsuario) {
            alert(`Já cadastrado! Aproveite nossa livraria, ${nomeUsuario}.`);
            navigate('/');
        }
    }, [])

    async function HandleLogin() {
        const response = await api.post('/login', {
            "usuario": usuario,
            "senha": senha
        })
        console.log(response.data)
        const token = response.data.token
        const user = response.data.usuario.usuario
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", user);
        navigate('/')
    }

    return (
        <div>
            <Header />

            <div className="container_login">
                <h1>Bem-vindo à Livraria</h1>

                <div className="container_input">
                    <label htmlFor="usuario">Usuário</label>
                    <input
                        id="usuario"
                        type="text"
                        placeholder="USUÁRIO"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        id="senha"
                        type="password"
                        placeholder="SENHA"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <button onClick={HandleLogin}>Entrar</button>

                <p>
                    Não tem login? Crie agora:
                    <Link to="/register">aqui</Link>
                </p>
            </div>

            <Footer />
        </div>
    )
}

export default Login
