import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePages from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Quary from './pages/Quary'
import Login from './components/Login'
import Reg from './components/Reg'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePages/>} />
          <Route path='/quary' element={<Quary/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/reg' element={<Reg/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App