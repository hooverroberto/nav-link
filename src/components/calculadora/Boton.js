import React from 'react'
import '../calculadora/Calculadora.css'

function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
      };
    
    return(
        <div className={`boton ${esOperador(props.children)? 'boton-op': null}`.trimEnd()}>
            {props.children}
        </div>
    )
}

export default Boton;