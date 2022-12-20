import React from 'react'
import '../calculadora/Calculadora.css'

const Calculadora = () => {

  
  


  return (

    <div className='container-fluid d-flex justify-content-center'>
      <div className='border border-primary mt-5  p-2 rounded-3 body-cal'>
        <div className='my-3 input'>
          <input className='border-0 my-2 p-2 w-100' type="text" placeholder='0'/>
        </div>
        <div className='row'>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>7</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>8</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>9</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton-op'>/</button>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-sm-3 '>
            <button className='btn btn-primary border-0 boton'>4</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>5</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>6</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton-op'>X</button>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>1</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>2</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>3</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton-op'>-</button>
          </div>
        </div>
        <div className='row my-2'>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>0</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton'>.</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton-igual'>=</button>
          </div>
          <div className='col-sm-3'>
            <button className='btn btn-primary border-0 boton-op'>+</button>
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