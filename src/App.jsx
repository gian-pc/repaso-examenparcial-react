import { useState } from "react";


import Espectaculo from "./Components/Espectaculo";
import { espectaculos } from "./espectaculos";
import Form from "./Components/Form";


function App() {


  const [isSelected, setisSelected] = useState(false)

  return (
    <>
      {
        isSelected ? <Form/> : null
      }
      {espectaculos.map((elemento) => (
        <Espectaculo setisSelected={setisSelected} elemento={elemento} key={elemento.id} />
      ))}
      
    </>

  )
}

export default App
