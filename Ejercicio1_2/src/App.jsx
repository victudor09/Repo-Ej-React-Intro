import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonClass from './components/PersonClass'
import { PersonFunctional } from './components/PersonFunctional'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'>
      
      <span> <PersonClass  name="Jhon" surname="Doe" age="24"/> </span>
      <span> <PersonClass  name="Rick" surname="Grime" age="45"/> </span>
      <span> <PersonClass  name="Jane" surname="Smith" age="30"/> </span>
      
      <span> <PersonFunctional name="James" surname="Rodriguez" age="34" /> </span>
      <span> <PersonFunctional name="Brad" surname="Pitt" age="62" /> </span>
      <span> <PersonFunctional name="Jennifer" surname="Lopez" age="55" /> </span>

    </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
     {/*  <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
