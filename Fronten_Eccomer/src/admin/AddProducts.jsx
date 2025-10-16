import React from 'react'
import Slidebar from './Slidebar'
import {useNavigate, Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const AddProducts = () => {
    const navigate = useNavigate()

  return (
     <div className='flex mt-16'>
        <Slidebar/>
        <div className='flex-1 p-10 min-h-screen'>
            <h1 className='text-3xl font-bold mb-6 text-gray-700'>Add Products 🛒</h1>
            <button onClick={()=>{navigate('/admin/adminproducts')}} className='text-xl hover:text-green-600 cursor-pointer'><IoMdArrowRoundBack/></button>
            <form action="" className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto'>
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Product Name</label>
                <input type="text" placeholder='Enter Product Name...' name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Price</label>
                <input type="Number" placeholder='Enter Product Price...' name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Categorys</label>
                <select name="" id=""  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2'>
                    <option value="">---Select---</option>
                    <option value="">Cafe</option>
                    <option value="">Home </option>
                    <option value="">Toys</option>
                    <option value="">Freash</option>
                    <option value="">Electronics</option>
                    <option value="">Mobile</option>
                    <option value="">Beauty</option>
                </select>
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Image Upload</label>
                <input type="File" name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                <div className='text-right'>
                    <button className='bg-red-600 text-white hover:bg-red-800 cursor-pointer px-4 py-2 my-4 rounded'>Add Products</button>
                </div>
            </form>
            

        </div>
    </div>
  )
}

export default AddProducts