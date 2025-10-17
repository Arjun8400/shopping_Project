import React from 'react'
import shoppingLogo from "../assets/logo.png"
import { data, Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-purple-100 via-white to-white shadow-md mt-16 border-t border-gray-400'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16 md:gap-32 text-gray-700'>
        <div>
          <img src={shoppingLogo} alt="" className='h-24 w-auto mb-3 ' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga aut ad saepe quia. Doloremque ea reiciendis voluptates facere saepe?
          </p>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-3 text-gray-700'>Quick Link</h3>
          <ul className='space-y-2 text-sm'>
            <li><Link to={"/"} className='hover:text-purple-500 font-semibold'>Home</Link></li>
            <li><Link to={'/about'}  className='hover:text-purple-500 font-semibold'>About</Link></li>
            <li><Link to={"/quary"} className='hover:text-purple-500 font-semibold'>Contact</Link></li>
            <li><Link className='hover:text-purple-500 font-semibold'>T&C</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-3 text-gray-700'>Follow Us</h3>
          <div className='flex space-x-2 text-2xl'>
            <Link className='hover:text-blue-700'>
              <FaFacebook />
            </Link>
            <Link className='hover:text-red-700'>
              <FaInstagram />
            </Link>
            <Link className='hover:text-sky-700'>
              <FaTwitter />
              </Link>
            <Link className='hover:text-green-700'>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-center text-sm text-gray-700 py-4 border-t border-gray-700'>
        © {new Date().getFullYear()} <span className='text-red-600 font-semibold'>GIFT Shop</span> MarketPlace Private Limited
      </div>
    </footer>
  )
}

export default Footer