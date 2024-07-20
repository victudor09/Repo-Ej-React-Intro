import { useState } from 'react'
import './App.css'
import HeaderFunctional from './components/HeaderFunctional'
import HomeFunctional from './components/HomeFunctional'

const hardSkills = ["Navision ERP","PowerBI","LookerStudio","Python","JS","SQL"]
const listItem = hardSkills.map((hardSkills, index) => 
  <li key={index}> {hardSkills} </li>)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      <HeaderFunctional />
      <HomeFunctional name="Victor" degree="Marketing y Gestion empresarial" educationOne="Big Data" educationTwo="Fullstack web development" />
      <ul>{listItem}</ul>
    </div>
    </>
  )
}

export default App
