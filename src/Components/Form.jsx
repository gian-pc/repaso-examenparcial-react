import React, { useState } from 'react'

const Form = () => {
    // estados
    const [comprador, setComprador] = useState({
        nombre: "",
        email: ""
    })

    // validaciones
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(comprador.nombre.length > 6 && comprador.nombre.includes(" ") && regexEmail.test(comprador.email)){

    }

    // onSubmit
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre completo:</label>
                // onChange
                <input type="text" onChange={(e) => setComprador({ ...comprador, nombre: e.target.value })} />

                <label>Email:</label>
                // onChange
                <input type="email" onChange={(e) => setComprador({ ...comprador, email: e.target.value })} />
                <button>Comprar entrada</button>
            </form>
            // mostrar un error
        </div>
        
    )
}

export default Form