import React from 'react'
import '../hojas-de-estilo/Boton.css';

function Boton({texto,esBotonDeClinc,manejarClic}){
    return(
        <button
            className={esBotonDeClinc ? 'boton-clic':'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    );
}
export default Boton;