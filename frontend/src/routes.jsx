import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Register from './pages/cadastro'
import NotFound from './pages/NotFound'
import Livro from './pages/livro'

export default function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/livro/:id' element={<Livro />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>


    )
}
