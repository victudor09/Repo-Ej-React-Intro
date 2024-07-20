import React from 'react'

export const PersonFunctional = (props) => {
  return (
    <div className='App'>
        <h1> Usuario Funcional </h1>
        <h2> Nombre: {props.name} </h2> 
        <h3> Apellido: {props.surname} </h3>
        <h4> Edad: {props.age} </h4>
    </div>
  )
}
