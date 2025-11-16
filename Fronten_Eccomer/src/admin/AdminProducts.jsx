import React, { useState } from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'

import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast'
import { useEffect } from 'react';

const AdminProducts = () => {
  const [product, setProduct] = useState([]) 

  async function getAllProduct() {
    try {
      const response = await fetch(`/api/getproduct`)

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

  useEffect(()=>{
    getAllProduct()
  }, [])

  async function handleDelete(id){
    try {
      const response = await fetch(`/api/productdelete/${id}`,{
        method: "DELETE"
      })
      const record =await response.json()
      if(response.ok){
        toast.success(record.message)
        getAllProduct()
      }else{
        toast.error(record.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }


  return (
    <div className='flex mt-16'>
      <Slidebar />
      <div className='flex-1 p-10 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-700'>Manage Products 🛒</h1>
        <Link to={'/admin/addproduct'}>
          <button className='flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700'>Add Products </button>
        </Link>

        {/* Product Cart */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>

          {
            product.map((items, index) => (
              <div key={index} className='bg-white rounded-xl shadow p-4 hover:shadow-xl'>
                <img src={`/uploads/${items.productImage}`} alt="" className='w-full h-40 object-contain rounded-md mb-4 border' />
                <h3 className='text-xl font-semibold text-gray-800 mb-1'>{items.productName}</h3>
                <p className='text-sm text-gray-600 '>Category : {items.productCategory}</p>
                <p className='text-green-600 font-bold mt-1'>{items.productPrice} ₹</p>

                {
                  items.productStatus === "In-Stock" ? <p className='text-blue-700 font-semibold mt-1'>{items.productStatus}</p>:<p className='text-red-700 font-semibold mt-1'>{items.productStatus}</p>
                }
                

                <div className='flex flex-col sm:flex-row justify-between mt-4'>
                  <Link to={`/admin/edit-product/${items._id}`} className='flex items-center text-xl gap-3 text-blue-500 hover:text-blue-800'><FaEdit /></Link>

                  <Link 
                  onClick={()=>{handleDelete(items._id)}}
                  className='flex items-center text-2xl gap-3 text-red-500 hover:text-red-800'><MdDelete /></Link>

                </div>
              </div>
            ))
          }


        </div>


      </div>
    </div>
  )
}

export default AdminProducts