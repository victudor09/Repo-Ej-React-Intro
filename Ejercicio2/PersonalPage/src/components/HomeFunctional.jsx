import React from 'react'

const HomeFunctional = (props) => {
  return (
    <div>
      <h3>¡Hola! Soy {props.name}</h3>
      <p> He estudiado {props.degree} con formación complementaria
        en {props.educationOne}. Actualmente estoy cursando 
        un bootcamp en {props.educationTwo} con los que poder orientar mi trayectoria profesional hacia una rama más tecnológica.
       </p>

      <h4>Lista de Conocimientos técnicos</h4>

      <section>

      </section>
    </div>
  )
}

export default HomeFunctional