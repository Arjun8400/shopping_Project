import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePages from './pages/HomePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePages/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App