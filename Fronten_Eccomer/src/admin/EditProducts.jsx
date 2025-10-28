import React from 'react'
import Slidebar from './Slidebar'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast'


const EditProducts = () => {
    const { id } = useParams()
    // console.log(id)
    const navigate = useNavigate()
    const [edit, setEdit] = useState({})

    async function editProductData() {
        try {
            const response = await fetch(`/api/editproductdata/${id}`)
            const record = await response.json()
            if (response.ok) {
                setEdit(record.data)
            } else {
                toast.error(record.message)
            }
        } catch (error) {
            toast.error(error)
        }

    }

    useEffect(() => {
        editProductData()
    }, [])


    function handleChange(e) {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    async function handlFrom(e) {
        e.preventDefault()
        try {

            const fromData = {
                Pname: edit.productName,
                Pprice: edit.productPrice,
                Cat: edit.productCategory,
                Pstatus: edit.productStatus
            }

            const response = await fetch(`/api/productupdate/${id}`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(fromData)
            })

            const record = await response.json()
            console.log(record)
            if (response.ok) {
                toast.success(record.message)
                navigate("/admin/adminproducts")
            } else {
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
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Update Products 🛒</h1>
                <button onClick={() => { navigate('/admin/adminproducts') }} className='text-xl hover:text-green-600 cursor-pointer'><IoMdArrowRoundBack /></button>


                <form action="" onSubmit={handlFrom} className='bg-white shadow-md rounded-xl p-6 max-w-3xl mx-auto'>
                    <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Product Name</label>
                    <input type="text" placeholder='Enter Product Name...'
                        name="productName"
                        value={edit.productName}
                        onChange={handleChange}
                        id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                    <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Price</label>
                    <input type="Number" placeholder='Enter Product Price...'
                        name="productPrice"
                        value={edit.productPrice}
                        onChange={handleChange}
                        id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2' />
                    <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Categorys</label>
                    <select name="productCategory"
                        value={edit.productCategory}
                        onChange={handleChange}
                        id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2'>
                        <option value="">---Select---</option>
                        <option value="cafe">Cafe</option>
                        <option value="home">Home </option>
                        <option value="toys">Toys</option>
                        <option value="freash">Freash</option>
                        <option value="electonics">Electronics</option>
                        <option value="mobile">Mobile</option>
                        <option value="beauty">Beauty</option>
                    </select>

                    <label htmlFor=" " className='block text-gray-700 font-medium mb-1'>Status</label>
                    <select name="productStatus"
                        value={edit.productStatus}
                        onChange={handleChange}
                        id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-2'>
                        <option value="">---Select---</option>
                        <option value="In-Stock">In-Stock</option>
                        <option value="Out-Of-Stock">Out-Of-Stock</option>

                    </select>

                    <div className='text-right'>
                        <button className='bg-red-600 text-white hover:bg-red-800 cursor-pointer px-4 py-2 my-4 rounded'>Change Products</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default EditProducts