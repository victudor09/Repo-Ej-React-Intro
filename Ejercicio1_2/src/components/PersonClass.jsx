import React, { Component } from 'react'

export default class PersonClass extends Component {
  render() {
    return (
      <div className='App'>
        <h1> Usuario de Clase </h1>
        <h2> Nombre: {this.props.name} </h2> {/* This se usa en componente de clase */}
        <h3> Apellido: {this.props.surname} </h3>
        <h4> Edad: {this.props.age} </h4>
      </div>
    )
  }
}
