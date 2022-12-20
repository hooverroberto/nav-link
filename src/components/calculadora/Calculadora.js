import React, {useState} from 'react'
import '../calculadora/Calculadora.css'
import Boton from './Boton'

const Calculadora = () => {

  const [input, setInput] =useState("Hola")  


  return (

    <div className='container-fluid d-flex justify-content-center'>
      <div className='border border-primary mt-5  p-2 rounded-3 body-cal'>
        <div className='my-3 input'>
          <input className='border-0 my-2 p-2 w-100' type="text" placeholder='0' input={input}/>
        </div>
        <div className='row'>
          <div className='col-sm-3'>            
            <Boton>7</Boton>
          </div>
          <div className='col-sm-3'>            
            <Boton>8</Boton>
          </div>
          <div className='col-sm-3'>            
            <Boton>9</Boton>
          </div>
          <div className='col-sm-3'>
            {/* <button className='btn btn-primary border-0 boton-op'>/</button> */}
            <Boton>/</Boton>
          </div>
        </div>
        <div className='row my-2'>
        <div className='col-sm-3'>           
            <Boton>4</Boton>
          </div>
          <div className='col-sm-3'>            
            <Boton>5</Boton>
          </div>
          <div className='col-sm-3'>           
            <Boton>6</Boton>
          </div>
          <div className='col-sm-3'>            
            <Boton>*</Boton>
          </div>
        </div>
        <div className='row my-2'>
        <div className='col-sm-3'>           
            <Boton>1</Boton>
          </div>
          <div className='col-sm-3'>           
            <Boton>2</Boton>
          </div>
          <div className='col-sm-3'>           
            <Boton>3</Boton>
          </div>
          <div className='col-sm-3'>
            {/* <button className='btn btn-primary border-0 boton-op'>/</button> */}
            <Boton>/</Boton>
          </div>
        </div>
        <div className='row my-2'>
        <div className='col-sm-3'>           
            <Boton>0</Boton>
          </div>
          <div className='col-sm-3'>           
            <Boton>.</Boton>
          </div>
          <div className='col-sm-3'>            
            <Boton>=</Boton>
          </div>
          <div className='col-sm-3'>
            {/* <button className='btn btn-primary border-0 boton-op'>/</button> */}
            <Boton>+</Boton>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-md-12'>
            <button className='btn btn-danger clear'>Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculadora