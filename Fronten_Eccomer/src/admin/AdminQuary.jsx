import React from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import {toast} from 'react-hot-toast'

const AdminQuary = () => {

    const [query, setQuery] = useState([])
    
    async function queryAll() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/queryalldata`)
            const record = await response.json()
            if(response.ok){
                setQuery(record.data)
            }else{
                toast.error(record.message)
            }            
        } catch (error) {
            toast.error(error)
        }
    }

    async function handleDelete(id){
        try {
            const response =await fetch(`${import.meta.env.VITE_API_URL}/api/querydelete/${id}`,{
                method:"DELETE"
            })
            const record = await response.json()
            if(response.ok){
                toast.success(record.message)
                queryAll()
            }else{
                toast.error(record.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }


    useEffect(() => {
        queryAll()
    }, [])


    return (
        <div className='flex mt-16'>
            <Slidebar />
            <div className='flex-1 p-10 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Management Quary 💻</h1>
                <div>
                    <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-950 dark:text-gray-300'>
                            <tr>
                                <th className='px-6 py-3'>Sr. No.</th>
                                <th className='px-6 py-3'>User Name</th>
                                <th className='px-6 py-3'>Quary</th>
                                <th className='px-6 py-3'>Email Id</th>
                                <th className='px-6 py-3'>Status</th>
                                <th className='px-6 py-3'>Action 1</th>
                                <th className='px-6 py-3'>Action 2</th>
                            </tr>
                        </thead>

                        <tbody>

                           {
                            query.length == 0 ? <p className='text-sm font-bold text-red-600 text-center'>No Any Query..</p> : query.map((item, index)=>(
                                <tr key={index} className='bg-white border-b border-gray-300 ' >
                                        <th className='px-6 py-3'>{index+1}</th>
                                        <th className='px-6 py-3'>{item.Name}</th>
                                        <th className='px-6 py-3'>{item.Quary}</th>
                                        <th className='px-6 py-3'>{item.Email}</th>
                                        <th className='px-6 py-3'>{item.quarystatus}</th>
                                        <th className='px-6'>

                                            <Link to={`/admin/queryreply/${item._id}`}>
                                                <button className='text-xs bg-green-500 hover:bg-green-800 px-3 py-2 rounded text-white'>Reply</button>

                                            </Link>
                                        </th>
                                        <th className='px-6'>
                                            <button onClick={()=>{handleDelete(item._id)}} className='text-xs bg-red-500 hover:bg-red-800 px-3 py-2 rounded text-white'>Delete</button>
                                        </th>
                                    </tr>
                            ))
                           }
                            

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminQuary