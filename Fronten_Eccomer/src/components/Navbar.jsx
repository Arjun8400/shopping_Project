import React from 'react'
import shoppingLogo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-purple-100 via-white to-white shadow-md fixed top-0 left-0 right-0 z-50'>
        <div className='max-w-16 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16 '>
                {/* Logo */}
                <div>
                    <img src={shoppingLogo} alt="shopping Logo" className='h-16 w-auto'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar