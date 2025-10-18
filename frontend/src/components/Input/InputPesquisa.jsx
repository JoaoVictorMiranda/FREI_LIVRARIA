import React from 'react'
import './InputPesquisa.scss'

const InputPesquisa = ({ type, placeholder, label, name }) => {
    return (
        <div className='container_input'>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default InputPesquisa