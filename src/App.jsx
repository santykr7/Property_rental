import { useState } from 'react'
import './App.css'
import Nav from './components/NavBar/Nav'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Home />
   </>
  )
}

export default App
