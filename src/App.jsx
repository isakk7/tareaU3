import { useState } from 'react'
import ComponenteHijo from './components/ComponenteHijo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Componente Padre</p>
        <ComponenteHijo/>
      
      </header>
    </div>
  )
}

export default App
