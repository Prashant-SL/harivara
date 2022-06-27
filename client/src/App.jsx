import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './Components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Users />
    </>
  )
}

export default App
