import React, { useEffect, useState } from 'react'
import Category from '../pages/Category'
import toast from 'react-hot-toast'


const Product = () => {

  const [productAll, setProductAll] = useState([])

  const [category, setCatagoty] = useState("All")

  async function productData(){
    try {
      const response = await fetch('api/userproduct')
      const record =await response.json()
      setProductAll(record.data)
    } catch (error) {
      toast.error(error)
    }

  }

  useEffect(()=>{
    productData()
  }, [])

  console.log(category)

  return (
    <div className='max-w-7xl mx-auto py-10 px-6'>
      <Category onselectCat={setCatagoty}/>
        <h2 className='text-2xl font-semibold text-gray-700 mb-6'>Products 🔥</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
             {
                    productAll.map((items, index)=>(
                        <div key={index} className='bg-gray-100 shadow-sm rounded-lg p-4 hover:shadow-xl' >               
                <img src={`/uploads/${items.productImage}`} alt="" 
                className='w-full h-32 object-contain rounded '
                />
                <h3 className='mt-2 font-medium text-gray-800'>{items.productName}</h3>
                <p className='mt-1 font-normal text-gray-500'>{items.productCategory}</p>
                <p className='text-green-700 font-bold'>{items.productPrice} ₹</p>
                <button className='w-full bg-purple-500 text-white mt-2 py-1 rounded hover:bg-purple-800 cursor-pointer'>Add To Cart</button>
                
            </div>
                    ))
                }
            

        </div>
    </div>
  )
}

export default Product