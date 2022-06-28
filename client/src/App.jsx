import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routers from './Components/Routers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routers />
    </>
  )
}

export default App
