import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const navegate = useNavigate()
    return (
        <div className='fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-50 '>
            {/* Cart start section */}
            <div className='bg-white w-full max-w-xl p-6 rounded-2xl relative overflow-y-auto max-h-[90vh]'>
                <button onClick={() => (navegate('/'))} className='absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl font-bold'>
                    <IoClose />
                </button>
                <h2 className='text-2xl font-bold text-purple-600 text-center mb-4'>
                    Your Cart 🛒
                </h2>
                {/* Cart Itams */}
                <ul className='divide-y divide-gray-300'>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((itam,index) => (
                            <li key={index} className='flex items-center gap-5 py-4'>
                                <img src={cartImage} alt="" className='w-14 rounded-2xl object-cover border' />
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-gray-700'>Coffee</h3>
                                </div>
                                <p className='text-sm text-green-600 font-bold'>$56</p>
                                <div className='flex items-center gap-2'>
                                    <button className='px-2 py-1 bg-purple-500 hover:bg-purple-700 text-white rounded'><FaMinus /></button>
                                    <button className='px-2'>0</button>
                                    <button className='px-2 py-1 bg-purple-500 hover:bg-purple-700 text-white rounded'><FaPlus /></button>
                                    {/* Delete Button */}
                                    <button className='px-2 py-1 text-xl text-gray-700 hover:text-red-700  rounded'><MdDelete /></button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
                {/* Cart Itams Total */}
                <div className='mt-4 text-right'>
                    <p className='text-lg font-semibold text-gray-800'>
                        Total : 
                        <span className='text-green-700 font-bold'> $56</span>
                    </p>
                    <button className='bg-purple-600 mt-4 w-full px-6 py-2 rounded text-white font-bold hover:bg-purple-900 cursor-pointer'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart