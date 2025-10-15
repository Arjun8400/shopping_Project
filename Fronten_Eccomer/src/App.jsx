import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePages from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Quary from './pages/Quary'
import Login from './components/Login'
import Reg from './components/Reg'

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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App