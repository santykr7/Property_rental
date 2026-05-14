import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Nav from './components/NavBar/Nav'
import Home from './components/Home/Home'
import PropertyDetails from './pages/PropertyDetails/PropertyDetails';

function App() {

  return (
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/property/:id' element={<PropertyDetails />}/>
   </Routes>
  )
}

export default App
