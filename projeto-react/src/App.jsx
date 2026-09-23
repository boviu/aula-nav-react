import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
// router
import {Link, Routes, Route} from 'react-router'
function App(){
  return (
    <div>
      <h1>MEU SITE FAVORITO EM REACT (O PRIMEIRO)</h1>
      
      <Link to='/'>Home</Link>
      <Link to='/sobre'>Sobre</Link>
      <Link to='/contato'>Contato</Link>
      <hr/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </div>
  )
}

export default App