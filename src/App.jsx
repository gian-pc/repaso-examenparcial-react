import { useState } from "react";


import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";


function App() {


  const [isSelected, setisSelected] = useState(false)

  return (
    <>
      {
        isSelected ? <form>formulario</form> : null
      }
      {espectaculos.map((elemento) => (
        <Espectaculo setisSelected={setisSelected} elemento={elemento} key={elemento.id} />
      ))}
      
    </>

  )
}

export default App
