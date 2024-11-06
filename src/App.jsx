import "./App.css"
import Espectaculo from "./Components/Espectaculo";
import {espectaculos} from "./espectaculos";


function App() {
  

  return (
    <>
      {espectaculos.map((elemento)=>(
        <Espectaculo elemento={elemento} key={elemento.id}/>
      ))}
    </>
    
  )
}

export default App
