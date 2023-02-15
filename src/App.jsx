import { useState } from 'react'
import './App.css'
import Navegacion from './components/Navegacion'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
      <Navegacion className=""/>    
    <Slider/>
        
      
    </div>
  )
}

export default App
