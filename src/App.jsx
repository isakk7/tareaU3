import { useState } from 'react'
import ComponenteHijo from './components/ComponenteHijo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Componente Padre</h1>
        <button
          style= {{
            width: "15vw",
            backgroundColor: "blueviolet",
            cursor: "pointer",
            margin: "lvw",
          }}
          onClick={() => setCount((current) => current + 1)}
        >
          +1
        </button>
        <h2>{count}</h2>
        <ComponenteHijo/>
      
      </header>
    </div>
  );
}

export default App
