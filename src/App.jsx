import "./App.css"
import {espectaculos} from "./espectaculos";


function App() {
  

  return (
    <>
      {espectaculos.map((elemento)=>(
        <div key={elemento.id}>
          <img src={elemento.img} alt="" />
          <h3>{elemento.artista}</h3>
          <h4>{elemento.fecha}</h4>
          <h2>{elemento.precio}</h2>
        </div>
      ))}
    </>
    
  )
}

export default App
