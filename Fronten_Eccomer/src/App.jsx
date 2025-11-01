import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePages from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Quary from './pages/Quary'
import Login from './components/Login'
import Reg from './components/Reg'
import Cart from './pages/Cart'
import AdminDashkbord from './admin/AdminDashkbord'
import AdminProducts from './admin/AdminProducts'
import AddProducts from './admin/AddProducts'
import EditProducts from './admin/EditProducts'
import AdminQuary from './admin/AdminQuary'
import About from './pages/About'
import QueryReply from './admin/QueryReply'

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
          <Route path='/about' element={<About/>}/>

          {/* Admin URL */}
          <Route path='/admin/dashboard' element={<AdminDashkbord/>}/>
          <Route path='/admin/adminproducts' element={<AdminProducts/>}/>
          <Route path='/admin/addproduct' element={<AddProducts/>}/>
          <Route path='/admin/edit-product/:id' element={<EditProducts/>}/>
          <Route path='/admin/adminquary' element={<AdminQuary/>}/>
          <Route path='/admin/queryreply/:id' element={<QueryReply/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App