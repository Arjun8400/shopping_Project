import React from 'react'
import Slidebar from './Slidebar'

const AdminQuary = () => {
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
                            <tr className='bg-white border-b border-gray-300 ' >
                                <th className='px-6 py-3'>1</th>
                                <th className='px-6 py-3'>Arjun</th>
                                <th className='px-6 py-3'>Mern</th>
                                <th className='px-6 py-3'>Youji099@gmail.com</th>
                                <th className='px-6 py-3'>Unread</th>
                                <th className='px-6'>
                                    <button className='text-xs bg-green-500 hover:bg-green-800 px-3 py-2 rounded text-white'>Reply</button>
                                </th>
                                <th className='px-6'>
                                    <button className='text-xs bg-red-500 hover:bg-red-800 px-3 py-2 rounded text-white'>Delete</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AdminQuary