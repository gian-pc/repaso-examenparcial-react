import React from 'react'

const Espectaculo = ({elemento}) => {
    return (
        <div key={elemento.id}>
            <img src={elemento.img} alt="" />
            <h3>{elemento.artista}</h3>
            <h4>{elemento.fecha}</h4>
            <h2>{elemento.precio}</h2>
        </div>
    )
}

export default Espectaculo