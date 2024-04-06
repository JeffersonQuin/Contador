
import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js';
import  freCodeCampLogo from './imagenes/Imagen2.jpg'
import { useState } from 'react';

function App() {
  const [numClics,setNumClics] = useState(0);
  const manejarClic=()=>{
   setNumClics(numClics+1);
  }
  const reiniciarContador =()=>{
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className="logo">
        <img
        className='-logo'
        src={freCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />

      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonDeClinc={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClinc={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
