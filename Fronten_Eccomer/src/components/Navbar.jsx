import React from 'react'
import shoppingLogo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { MdAddCall } from "react-icons/md";
import { FaSearch, FaHome, FaCartPlus, FaRegUserCircle, FaBars, FaTimes, } from "react-icons/fa";
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='bg-gradient-to-r from-purple-100 via-white to-white shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 relative'>
          {/* Logo */}
          <div>
            <img src={shoppingLogo} alt="shopping Logo" className='h-12 w-auto' />
          </div>
          {/* Search Bar */}
          <div className='flex-1 mx-4 '>
            <div className='relative'>
              <input type="text" name='' id='' className='w-full bg-gray-200 rounded-full pl-4 pr-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 ' placeholder='Search for any More Products...' />
              <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg' />
            </div>
          </div>
          <div >
            {/* Menu */}
            <div className='hidden md:flex items-center space-x-6'>
              <Link className='text-gray-700 hover:text-purple-500'>
                <FaHome className='text-xl' />
              </Link>
              <Link className='text-gray-700 hover:text-purple-500'>
                <MdAddCall className='text-xl' />
              </Link>
              <Link className='text-gray-700 hover:text-purple-500'>
                <FaCartPlus className='text-xl' />
              </Link>
              <Link className='text-gray-700 hover:text-purple-500'>
                <FaRegUserCircle className='text-xl' />
              </Link>
            </div>
            {/* Toggle */}
            <div className='md:hidden'>
              <button className='text-2xl text-purple-500' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            {/* Mobile View */}
            {
              isOpen && <div className='md:hidden px-4 bg-amber-100 pt-2 shadow-md pb-4 space-y-2 absolute right-0 top-18 w-full'>
              <Link className='block text-gray-500 hover:text-purple-500'>
                <FaHome className='text-xl inline' /> Home
              </Link>
              <Link className='block text-gray-500 hover:text-purple-500'>
                <MdAddCall className='inline text-xl' /> Contact
              </Link>
              <Link className='block text-gray-500 hover:text-purple-500'>
                <FaCartPlus className='text-xl inline' /> Cart
              </Link>
              <Link className='block text-gray-500 hover:text-purple-500'>
                <FaRegUserCircle className='text-xl inline' /> User
              </Link>
            </div>
            }
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar