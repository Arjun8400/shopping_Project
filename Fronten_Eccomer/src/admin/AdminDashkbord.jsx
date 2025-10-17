import React from 'react'
import Slidebar from './Slidebar'

const AdminDashkbord = () => {
  return (
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-700'>Admin Deshboard 💻</h1>
        <div className='grid grid-cols-1'>
          <div className='bg-white rounded p-6 shadow-2xl'>
            <h2 className='text-xl font-bold text-gray-800'>Total Products</h2>
            <p className='text-3xl text-green-600 font-bold'>45</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashkbord