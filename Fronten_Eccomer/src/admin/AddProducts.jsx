import React, { useState } from 'react'
import Slidebar from './Slidebar'
import {useNavigate, Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import {toast} from 'react-hot-toast'

const AddProducts = () => {
    const navigate = useNavigate()

    const [product, setProduct] = useState({Pname:"", Price:"", Cat:""})

    const [Pimage, setPimage] = useState("")

   async function handleForm (e){
        e.preventDefault()
        const formData = new FormData()
        formData.append("Pname", product.Pname)
        formData.append("Price", product.Price)
        formData.append("Cat", product.Cat)
        formData.append("image", Pimage)
        try {
         const response =  await fetch(`/api/addadminproduct`, {
            method : "POST",
            body:formData
         })

         const record = await response.json()
        
         if(response.ok){
            toast.success(record.message);
            navigate("/admin/adminproducts")
         }else{
            toast.error(record.message)
         }
        } catch (error) {
            toast.error(error)
        }
    }


    function handleChange(e){
        setProduct({...product, [e.target.name]:e.target.value})
    }

  return (
     <div className='flex mt-16'>
        <Slidebar/>
        <div className='flex-1 p-10 min-h-screen'>
            <h1 className='text-3xl font-bold mb-6 text-gray-700'>Add Products 🛒</h1>
            <button onClick={()=>{navigate('/admin/adminproducts')}} className='text-xl hover:text-green-600 cursor-pointer'><IoMdArrowRoundBack/></button>
            <form action="" onSubmit={handleForm} className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto'>
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Product Name</label>
                <input type="text" placeholder='Enter Product Name...' 
                name="Pname" 
                value={product.Pname}
                onChange={handleChange}
                id="" 
                className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Price</label>
                <input type="Number" placeholder='Enter Product Price...' 
                name="Price" 
                value={product.Price}
                onChange={handleChange}
                id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Categorys</label>
                <select name="Cat"
                value={product.Cat} 
                onChange={handleChange}
                id=""  className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2'>
                    <option value="">---Select---</option>
                    <option value="cafe">Cafe</option>
                    <option value="home">Home </option>
                    <option value="toys">Toys</option>
                    <option value="freash">Freash</option>
                    <option value="electonics">Electronics</option>
                    <option value="mobile">Mobile</option>
                    <option value="beauty">Beauty</option>
                </select>
                <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Image Upload</label>
                <input type="File" 
                name="image"
                onChange={(e)=>(setPimage(e.target.files[0]))} 
                id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                <div className='text-right'>
                    <button className='bg-red-600 text-white hover:bg-red-800 cursor-pointer px-4 py-2 my-4 rounded'>Add Products</button>
                </div>
            </form>
            

        </div>
    </div>
  )
}

export default AddProducts