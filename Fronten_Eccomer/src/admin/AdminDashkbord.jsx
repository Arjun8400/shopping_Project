import React from 'react'
import Slidebar from './Slidebar'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'

const AdminDashkbord = () => {
  const [product, setProduct] = useState([])

  async function getAllProduct() {
    try {
      const token = localStorage.getItem("adminToken");
      const response =  await fetch(`/api/allproduct`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
      const record = await response.json()
      if (response.ok) {
        setProduct(record.data)
      } else {
        toast.error(record.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }
  useEffect(() => {
    getAllProduct()
  }, [])

  return (
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-700'>Admin Deshboard 💻</h1>
        <div className='grid grid-cols-1'>
          <div className='bg-white rounded p-6 shadow-2xl'>
            <h2 className='text-xl font-bold text-gray-800'>Total Products</h2>
            <p className='text-3xl text-green-600 font-bold'>{product.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashkbord