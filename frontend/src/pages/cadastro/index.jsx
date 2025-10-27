import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import api from '../../api.js'
import { useNavigate } from "react-router";

import './index.scss'

const Register = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const nomeUsuario = localStorage.getItem("usuario")

        if (nomeUsuario) {
            alert(`Já cadastrado! Aproveite nossa livraria, ${nomeUsuario}.`);
            navigate('/')
        }
    }, [navigate]);

    async function HandleRegister() {
        await api.post('/register', {
            "usuario": usuario,
            "senha": senha
        });

        const response = await api.post('/login', {
            "usuario": usuario,
            "senha": senha
        });

        const token = response.data.token;
        const user = response.data.usuario.usuario;

        localStorage.setItem("token", token);
        localStorage.setItem("usuario", user);
        alert(`Seja bem-vindo, ${response.data.usuario.usuario}!`);
        navigate('/');
    }

    return (
        <div>
            <Header />

            <div className="container_login">
                <h1>Faça seu cadastro</h1>

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

                <button onClick={HandleRegister}>Cadastrar</button>
            </div>

            <Footer />
        </div>
    )
}

export default Register
